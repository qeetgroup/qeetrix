import fs from "node:fs";
import path from "node:path";

const packageRoot = process.cwd();
const svgRoot = path.join(packageRoot, "svgs");
const outputRoot = path.join(packageRoot, "src", "generated");
const variantOrder = ["bold", "broken", "bulk", "linear", "outline", "twotone"];

const styleNames = {
  bold: "Bold",
  broken: "Broken",
  bulk: "Bulk",
  linear: "Linear",
  ouline: "Outline",
  outline: "Outline",
  twotone: "TwoTone",
};

const styleFileNames = {
  ouline: "outline",
};

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function toComponentName(
  iconName,
  styleSuffix,
  usedNames = new Set(),
  reservedNames = new Set(),
) {
  const baseName = toPascalCase(iconName);
  const safeBaseName = /^[A-Za-z_$]/.test(baseName)
    ? baseName
    : `Icon${baseName}`;
  let componentName = `${safeBaseName}${styleSuffix}`;
  let duplicateIndex = 2;

  if (reservedNames.has(componentName)) {
    componentName = `${safeBaseName}${styleSuffix}${styleSuffix}`;
  }

  while (usedNames.has(componentName) || reservedNames.has(componentName)) {
    componentName = `${safeBaseName}${duplicateIndex}${styleSuffix}`;
    duplicateIndex += 1;
  }

  usedNames.add(componentName);

  return componentName;
}

function toBaseExportName(iconName, usedNames = new Set()) {
  const baseName = toPascalCase(iconName);
  const safeBaseName = /^[A-Za-z_$]/.test(baseName)
    ? baseName
    : `Icon${baseName}`;
  let exportName = safeBaseName;
  let duplicateIndex = 2;

  while (usedNames.has(exportName)) {
    exportName = `${safeBaseName}${duplicateIndex}`;
    duplicateIndex += 1;
  }

  usedNames.add(exportName);

  return exportName;
}

function jsxAttributeName(name) {
  if (name === "class") {
    return "className";
  }

  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function normalizeAttributeValue(name, value) {
  if (name === "fill" || name === "stroke") {
    if (value.toLowerCase() === "#292d32") {
      return "currentColor";
    }
  }

  return value;
}

function convertAttributes(markup) {
  return markup.replace(
    /([:@a-zA-Z0-9-]+)="([^"]*)"/g,
    (_, rawName, rawValue) => {
      const name = jsxAttributeName(rawName);
      const value = normalizeAttributeValue(name, rawValue);
      return `${name}="${value}"`;
    },
  );
}

function indent(text, spaces = 4) {
  const prefix = " ".repeat(spaces);
  return text
    .trim()
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

function extractSvgParts(svg) {
  const match = svg.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/);

  if (!match) {
    throw new Error("Unable to parse SVG root.");
  }

  const [, rawAttributes, rawInner] = match;
  const viewBoxMatch = rawAttributes.match(/viewBox="([^"]+)"/);
  const fillMatch = rawAttributes.match(/fill="([^"]+)"/);

  return {
    viewBox: viewBoxMatch?.[1] ?? "0 0 24 24",
    fill: fillMatch?.[1] ?? "none",
    inner: convertAttributes(rawInner),
  };
}

function buildComponentSource(components) {
  const blocks = components.map(({ componentName, svg }) => {
    const { viewBox, fill, inner } = extractSvgParts(svg);

    return `function ${componentName}({ size, style, "aria-label": ariaLabel, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="${viewBox}"
      fill="${fill}"
      focusable="false"
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      style={size === undefined ? style : { ...style, width: size, height: size }}
      {...props}
    >
${indent(inner, 6)}
    </svg>
  )
}`;
  });

  const exports = components
    .map(({ componentName }) => componentName)
    .join(", ");

  return `import type { IconProps } from "../types"

${blocks.join("\n\n")}

export { ${exports} }
`;
}

function buildRegistrySource(styles, registryEntries) {
  const imports = styles
    .map((style) => `import * as ${style}Icons from "./${style}"`)
    .join("\n");

  const iconNames = registryEntries
    .map(({ baseName }) => `"${baseName}"`)
    .join(", ");

  const entries = registryEntries.map(({ baseName, variants }) => {
    const mappedVariants = Object.entries(variants)
      .map(
        ([variant, componentName]) =>
          `    ${variant}: ${variant}Icons.${componentName}`,
      )
      .join(",\n");

    return `  ${baseName}: {\n${mappedVariants}\n  }`;
  });

  return `import type { IconRegistry } from "../types"
${imports ? `${imports}\n` : ""}
const iconNames = [${iconNames}] as const

type IconName = (typeof iconNames)[number]

const iconRegistry: IconRegistry<IconName> = {
${entries.join(",\n")}
}

export { iconNames, iconRegistry }

export type { IconName }
`;
}

function buildBaseIconsSource(iconNames) {
  const iconExports = iconNames
    .map((iconName) => `const ${iconName} = createIcon("${iconName}")`)
    .join("\n");
  const exportNames = iconNames.join(", ");

  return `import type { BaseIconProps, IconVariant } from "../types"
import type { IconName } from "./registry"
import { iconRegistry } from "./registry"

const fallbackVariants = ["linear", "outline", "bold", "broken", "bulk", "twotone"] as const satisfies readonly IconVariant[]

function resolveIcon(name: IconName, variant: IconVariant) {
  const entry = iconRegistry[name]

  if (entry[variant]) {
    return entry[variant]
  }

  for (const fallbackVariant of fallbackVariants) {
    if (entry[fallbackVariant]) {
      return entry[fallbackVariant]
    }
  }

  return null
}

function createIcon(name: IconName) {
  function BaseIcon({ variant = "linear", ...props }: BaseIconProps) {
    const ResolvedIcon = resolveIcon(name, variant)

    if (!ResolvedIcon) {
      return null
    }

    return <ResolvedIcon {...props} />
  }

  BaseIcon.displayName = name

  return BaseIcon
}

${iconExports}

export { ${exportNames} }
`;
}

function buildIndexSource(styles) {
  const lines = styles.map((style) => `export * from "./${style}"`);

  lines.push(`export * from "./registry"`, `export * from "./icons"`);

  return `${lines.join("\n")}\n`;
}

function main() {
  fs.rmSync(outputRoot, { recursive: true, force: true });
  fs.mkdirSync(outputRoot, { recursive: true });

  const exportsByStyle = {};
  const filesByStyle = {};
  const baseNamesByIconName = new Map();

  const styles = fs
    .readdirSync(svgRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((left, right) => {
      const leftIndex = variantOrder.indexOf(left);
      const rightIndex = variantOrder.indexOf(right);

      if (leftIndex === -1 && rightIndex === -1) {
        return left.localeCompare(right);
      }

      if (leftIndex === -1) {
        return 1;
      }

      if (rightIndex === -1) {
        return -1;
      }

      return leftIndex - rightIndex;
    });

  for (const style of styles) {
    const styleDir = path.join(svgRoot, style);
    filesByStyle[style] = fs
      .readdirSync(styleDir)
      .filter((file) => file.endsWith(".svg"))
      .sort();
  }

  const usedBaseNames = new Set();
  const iconNames = Array.from(
    new Set(
      Object.values(filesByStyle)
        .flat()
        .map((file) => file.replace(/\.svg$/, "")),
    ),
  ).sort();

  for (const iconName of iconNames) {
    baseNamesByIconName.set(
      iconName,
      toBaseExportName(iconName, usedBaseNames),
    );
  }

  const registryByBaseName = new Map();

  for (const style of styles) {
    const styleSuffix = styleNames[style] ?? toPascalCase(style);
    const publicStyle = styleFileNames[style] ?? style;
    const styleDir = path.join(svgRoot, style);
    const usedNames = new Set();
    const svgFiles = filesByStyle[style];

    const components = svgFiles.map((file) => {
      const iconName = file.replace(/\.svg$/, "");
      const componentName = toComponentName(
        iconName,
        styleSuffix,
        usedNames,
        usedBaseNames,
      );
      const svg = fs.readFileSync(path.join(styleDir, file), "utf8");
      const baseName = baseNamesByIconName.get(iconName);

      if (!registryByBaseName.has(baseName)) {
        registryByBaseName.set(baseName, {});
      }

      registryByBaseName.get(baseName)[publicStyle] = componentName;

      return {
        baseName,
        componentName,
        svg,
      };
    });

    exportsByStyle[publicStyle] = components.map(
      ({ componentName }) => componentName,
    );
    fs.writeFileSync(
      path.join(outputRoot, `${publicStyle}.tsx`),
      buildComponentSource(components),
      "utf8",
    );
  }

  const publicStyles = Object.keys(exportsByStyle).sort((left, right) => {
    const leftIndex = variantOrder.indexOf(left);
    const rightIndex = variantOrder.indexOf(right);

    if (leftIndex === -1 && rightIndex === -1) {
      return left.localeCompare(right);
    }

    if (leftIndex === -1) {
      return 1;
    }

    if (rightIndex === -1) {
      return -1;
    }

    return leftIndex - rightIndex;
  });

  const registryEntries = Array.from(registryByBaseName.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([baseName, variants]) => ({
      baseName,
      variants: Object.fromEntries(
        Object.entries(variants).sort(
          ([left], [right]) =>
            variantOrder.indexOf(left) - variantOrder.indexOf(right),
        ),
      ),
    }));

  fs.writeFileSync(
    path.join(outputRoot, "registry.ts"),
    buildRegistrySource(publicStyles, registryEntries),
    "utf8",
  );
  fs.writeFileSync(
    path.join(outputRoot, "icons.tsx"),
    buildBaseIconsSource(registryEntries.map(({ baseName }) => baseName)),
    "utf8",
  );
  fs.writeFileSync(
    path.join(outputRoot, "index.ts"),
    buildIndexSource(publicStyles),
    "utf8",
  );
}

main();
