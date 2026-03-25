import fs from "node:fs"
import path from "node:path"

const packageRoot = process.cwd()
const svgRoot = path.join(packageRoot, "svgs")
const outputRoot = path.join(packageRoot, "src", "generated")

const styleNames = {
  bold: "Bold",
  broken: "Broken",
  bulk: "Bulk",
  linear: "Linear",
  ouline: "Outline",
  twotone: "TwoTone",
}

const styleFileNames = {
  ouline: "outline",
}

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("")
}

function toComponentName(iconName, styleSuffix, usedNames = new Set()) {
  const baseName = toPascalCase(iconName)
  const safeBaseName = /^[A-Za-z_$]/.test(baseName) ? baseName : `Icon${baseName}`
  let componentName = `${safeBaseName}${styleSuffix}`
  let duplicateIndex = 2

  while (usedNames.has(componentName)) {
    componentName = `${safeBaseName}${duplicateIndex}${styleSuffix}`
    duplicateIndex += 1
  }

  usedNames.add(componentName)

  return componentName
}

function jsxAttributeName(name) {
  if (name === "class") {
    return "className"
  }

  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

function normalizeAttributeValue(name, value) {
  if (name === "fill" || name === "stroke") {
    if (value.toLowerCase() === "#292d32") {
      return "currentColor"
    }
  }

  return value
}

function convertAttributes(markup) {
  return markup.replace(/([:@a-zA-Z0-9-]+)="([^"]*)"/g, (_, rawName, rawValue) => {
    const name = jsxAttributeName(rawName)
    const value = normalizeAttributeValue(name, rawValue)
    return `${name}="${value}"`
  })
}

function indent(text, spaces = 4) {
  const prefix = " ".repeat(spaces)
  return text
    .trim()
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n")
}

function extractSvgParts(svg) {
  const match = svg.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/)

  if (!match) {
    throw new Error("Unable to parse SVG root.")
  }

  const [, rawAttributes, rawInner] = match
  const viewBoxMatch = rawAttributes.match(/viewBox="([^"]+)"/)
  const fillMatch = rawAttributes.match(/fill="([^"]+)"/)

  return {
    viewBox: viewBoxMatch?.[1] ?? "0 0 24 24",
    fill: fillMatch?.[1] ?? "none",
    inner: convertAttributes(rawInner),
  }
}

function buildComponentSource(components) {
  const blocks = components.map(({ componentName, svg }) => {
    const { viewBox, fill, inner } = extractSvgParts(svg)

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
}`
  })

  const exports = components.map(({ componentName }) => componentName).join(", ")

  return `import type { IconProps } from "../types"

${blocks.join("\n\n")}

export { ${exports} }
`
}

function buildIndexSource(exportsByStyle) {
  const lines = Object.keys(exportsByStyle)
    .sort()
    .map((style) => `export * from "./${style}"`)

  return `${lines.join("\n")}\n`
}

function main() {
  fs.rmSync(outputRoot, { recursive: true, force: true })
  fs.mkdirSync(outputRoot, { recursive: true })

  const exportsByStyle = {}

  const styles = fs
    .readdirSync(svgRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()

  for (const style of styles) {
    const styleSuffix = styleNames[style] ?? toPascalCase(style)
    const styleFileName = styleFileNames[style] ?? style
    const styleDir = path.join(svgRoot, style)
    const usedNames = new Set()
    const svgFiles = fs
      .readdirSync(styleDir)
      .filter((file) => file.endsWith(".svg"))
      .sort()

    const components = svgFiles.map((file) => {
      const iconName = file.replace(/\.svg$/, "")
      const componentName = toComponentName(iconName, styleSuffix, usedNames)
      const svg = fs.readFileSync(path.join(styleDir, file), "utf8")

      return {
        componentName,
        svg,
      }
    })

    exportsByStyle[styleFileName] = components.map(({ componentName }) => componentName)
    fs.writeFileSync(
      path.join(outputRoot, `${styleFileName}.tsx`),
      buildComponentSource(components),
      "utf8"
    )
  }

  fs.writeFileSync(path.join(outputRoot, "index.ts"), buildIndexSource(exportsByStyle), "utf8")
}

main()
