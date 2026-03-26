"use client";

import { cn } from "@/lib/cn";
import { Check, Copy, LoaderCircle, Search } from "lucide-react";
import {
  startTransition,
  useDeferredValue,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type RefObject,
} from "react";
import type {
  IconComponent,
  IconName,
  IconRegistry,
  IconVariant,
} from "@qeetrix/icons";

const ICON_VARIANTS = [
  "bold",
  "broken",
  "bulk",
  "linear",
  "outline",
  "twotone",
] as const satisfies readonly IconVariant[];

const ICON_SIZES = {
  small: {
    label: "Small",
    previewClassName: "min-h-24",
    value: 20,
  },
  medium: {
    label: "Medium",
    previewClassName: "min-h-28",
    value: 24,
  },
  large: {
    label: "Large",
    previewClassName: "min-h-32",
    value: 32,
  },
} as const;

const INITIAL_VISIBLE_ICONS = 96;
const VISIBLE_ICON_BATCH = 64;

type IconSizeOption = keyof typeof ICON_SIZES;
type CopyFormat = "import" | "jsx" | "svg";
type LoadedIconModule = {
  iconNames: readonly IconName[];
  iconRegistry: IconRegistry<IconName>;
};
type CopyState = {
  format: CopyFormat;
  iconName: IconName;
};

function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay, value]);

  return debouncedValue;
}

function formatIconName(iconName: string) {
  return iconName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .replace(/(\d)([A-Za-z])/g, "$1 $2")
    .trim();
}

function formatVariantLabel(variant: IconVariant) {
  return variant === "twotone"
    ? "Two Tone"
    : variant.charAt(0).toUpperCase() + variant.slice(1);
}

async function copyText(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function getIconImportSnippet(iconName: IconName) {
  return `import { ${iconName} } from "@qeetrix/icons";`;
}

function getIconUsageSnippet(
  iconName: IconName,
  variant: IconVariant,
  size: number,
) {
  return `<${iconName} variant="${variant}" size={${size}} />`;
}

function getCopyAnnouncement(copyState: CopyState | null) {
  if (!copyState) {
    return "";
  }

  const label = copyState.format === "jsx" ? "usage" : copyState.format;
  return `Copied ${label} for ${copyState.iconName}.`;
}

type IconCardProps = {
  copiedState: CopyState | null;
  iconName: IconName;
  iconSize: IconSizeOption;
  onCopy: (
    iconName: IconName,
    format: CopyFormat,
    svgMarkup?: string | null,
  ) => Promise<void>;
  selectedVariant: IconVariant;
  SelectedIcon: IconComponent;
};

function IconCard({
  copiedState,
  iconName,
  iconSize,
  onCopy,
  selectedVariant,
  SelectedIcon,
}: IconCardProps) {
  const previewRef = useRef<HTMLDivElement>(null);
  const readableName = formatIconName(iconName);
  const sizeOption = ICON_SIZES[iconSize];
  const copiedFormat =
    copiedState?.iconName === iconName ? copiedState.format : null;

  const handleCopy = async (format: CopyFormat) => {
    const svgMarkup =
      format === "svg"
        ? (previewRef.current?.querySelector("svg")?.outerHTML ?? null)
        : null;

    await onCopy(iconName, format, svgMarkup);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    if (event.target !== event.currentTarget) {
      return;
    }

    event.preventDefault();
    await handleCopy("jsx");
  };

  return (
    <article
      className="group rounded-xl border border-fd-border/70 bg-fd-card/70 p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-fd-foreground/20 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:border-fd-foreground/20 focus-within:shadow-lg"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="truncate text-[11px] font-medium uppercase tracking-[0.2em] text-fd-muted-foreground">
          {formatVariantLabel(selectedVariant)}
        </span>
        <button
          className="inline-flex size-8 items-center justify-center rounded-full border border-fd-border/70 bg-fd-background/80 text-fd-muted-foreground transition hover:border-fd-foreground/20 hover:text-fd-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          onClick={() => handleCopy("jsx")}
          type="button"
        >
          {copiedFormat === "jsx" ? (
            <Check className="size-4" />
          ) : (
            <Copy className="size-4" />
          )}
          <span className="sr-only">Copy JSX usage for {iconName}</span>
        </button>
      </div>

      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden rounded-xl border border-fd-border/60 bg-gradient-to-b from-fd-background to-fd-muted/40 px-3 py-6",
          sizeOption.previewClassName,
        )}
        ref={previewRef}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
        <SelectedIcon
          className="relative shrink-0 text-fd-foreground transition duration-200 group-hover:scale-110 group-focus-within:scale-110"
          size={sizeOption.value}
        />
      </div>

      <div className="mt-3 min-w-0">
        <p className="truncate text-sm font-semibold text-fd-foreground">
          {iconName}
        </p>
        <p className="truncate text-xs text-fd-muted-foreground">
          {readableName}
        </p>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:opacity-0 sm:translate-y-1 sm:transition sm:duration-200 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
        <button
          className="inline-flex items-center justify-center rounded-lg border border-fd-border/70 bg-fd-background px-3 py-2 text-xs font-medium text-fd-foreground transition hover:border-fd-foreground/20 hover:bg-fd-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          onClick={() => handleCopy("import")}
          type="button"
        >
          {copiedFormat === "import" ? "Copied import" : "Copy import"}
        </button>
        <button
          className="inline-flex items-center justify-center rounded-lg border border-fd-border/70 bg-fd-background px-3 py-2 text-xs font-medium text-fd-foreground transition hover:border-fd-foreground/20 hover:bg-fd-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          onClick={() => handleCopy("jsx")}
          type="button"
        >
          {copiedFormat === "jsx" ? "Copied JSX" : "Copy JSX"}
        </button>
        <button
          className="inline-flex items-center justify-center rounded-lg border border-dashed border-fd-border/70 bg-fd-muted/40 px-3 py-2 text-xs font-medium text-fd-muted-foreground transition hover:border-fd-foreground/20 hover:text-fd-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
          onClick={() => handleCopy("svg")}
          type="button"
        >
          {copiedFormat === "svg" ? "Copied SVG" : "Copy SVG"}
        </button>
      </div>
    </article>
  );
}

type LoadMoreSentinelProps = {
  hasMore: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
  total: number;
  visible: number;
};

function LoadMoreSentinel({
  hasMore,
  sentinelRef,
  total,
  visible,
}: LoadMoreSentinelProps) {
  if (!hasMore) {
    return null;
  }

  return (
    <div className="flex justify-center pt-2">
      <div
        className="inline-flex items-center gap-2 rounded-full border border-fd-border/70 bg-fd-card/80 px-4 py-2 text-xs text-fd-muted-foreground"
        ref={sentinelRef}
      >
        <LoaderCircle className="size-3.5 animate-spin" />
        Loading more icons ({visible}/{total})
      </div>
    </div>
  );
}

export function IconGallery() {
  const searchId = useId();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [iconModule, setIconModule] = useState<LoadedIconModule | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const [copiedState, setCopiedState] = useState<CopyState | null>(null);
  const [query, setQuery] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<IconVariant>("linear");
  const [selectedSize, setSelectedSize] = useState<IconSizeOption>("medium");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_ICONS);
  const debouncedQuery = useDebouncedValue(query, 220);
  const deferredQuery = useDeferredValue(debouncedQuery.trim().toLowerCase());

  useEffect(() => {
    let active = true;

    import("@qeetrix/icons")
      .then((module) => {
        if (!active) {
          return;
        }

        startTransition(() => {
          setIconModule({
            iconNames: module.iconNames as readonly IconName[],
            iconRegistry: module.iconRegistry as IconRegistry<IconName>,
          });
          setLoadError(null);
        });
      })
      .catch((error: unknown) => {
        if (!active) {
          return;
        }

        const message =
          error instanceof Error ? error.message : "Unknown import failure";
        setLoadError(`Unable to load the icon library: ${message}`);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!copiedState) {
      return;
    }

    const timeoutId = window.setTimeout(() => setCopiedState(null), 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [copiedState]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_ICONS);
  }, [deferredQuery, selectedVariant]);

  const matchingIcons = iconModule
    ? iconModule.iconNames.filter((iconName) => {
        const entry = iconModule.iconRegistry[iconName];

        if (!entry[selectedVariant]) {
          return false;
        }

        if (!deferredQuery) {
          return true;
        }

        return `${iconName} ${formatIconName(iconName)}`
          .toLowerCase()
          .includes(deferredQuery);
      })
    : [];

  const visibleIcons = matchingIcons.slice(0, visibleCount);
  const hasMoreIcons = visibleIcons.length < matchingIcons.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !hasMoreIcons) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setVisibleCount((currentVisible) =>
          Math.min(currentVisible + VISIBLE_ICON_BATCH, matchingIcons.length),
        );
      },
      {
        rootMargin: "220px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMoreIcons, matchingIcons.length]);

  const handleCopy = async (
    iconName: IconName,
    format: CopyFormat,
    svgMarkup?: string | null,
  ) => {
    setCopyError(null);

    try {
      const snippet =
        format === "import"
          ? getIconImportSnippet(iconName)
          : format === "svg"
            ? svgMarkup
            : getIconUsageSnippet(
                iconName,
                selectedVariant,
                ICON_SIZES[selectedSize].value,
              );

      if (!snippet) {
        throw new Error("No SVG markup was available for this icon.");
      }

      await copyText(snippet);
      setCopiedState({ format, iconName });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to copy to clipboard.";
      setCopyError(message);
    }
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedVariant("linear");
    setSelectedSize("medium");
  };

  const loading = !iconModule && !loadError;

  return (
    <section className="not-prose my-8 space-y-6">
      <p aria-live="polite" className="sr-only">
        {getCopyAnnouncement(copiedState)}
      </p>

      <div className="sticky top-4 z-20 rounded-2xl border border-fd-border/70 bg-fd-background/90 p-4 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-fd-background/80">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-fd-foreground">
                Icon Explorer
              </h2>
              <p className="text-sm text-fd-muted-foreground">
                Browse the full Qeetrix icon set, switch variants, and copy
                ready-to-use snippets.
              </p>
            </div>
            <div className="text-sm text-fd-muted-foreground">
              {iconModule
                ? `${matchingIcons.length} matching icons`
                : "Loading icon registry"}
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_auto_auto] lg:items-center">
            <label
              className="relative flex items-center text-sm text-fd-muted-foreground"
              htmlFor={searchId}
            >
              <Search className="pointer-events-none absolute left-3 size-4" />
              <input
                className="h-11 w-full rounded-xl border border-fd-border/70 bg-fd-card px-10 text-sm text-fd-foreground outline-none transition placeholder:text-fd-muted-foreground focus:border-fd-foreground/25 focus:ring-2 focus:ring-fd-ring/50 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={loading}
                id={searchId}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search icons by name"
                type="search"
                value={query}
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {ICON_VARIANTS.map((variant) => (
                <button
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
                    selectedVariant === variant
                      ? "border-fd-foreground bg-fd-foreground text-fd-primary-foreground shadow-sm"
                      : "border-fd-border/70 bg-fd-card text-fd-muted-foreground hover:border-fd-foreground/20 hover:text-fd-foreground",
                  )}
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  type="button"
                >
                  {formatVariantLabel(variant)}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {(Object.keys(ICON_SIZES) as IconSizeOption[]).map((size) => (
                <button
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring",
                    selectedSize === size
                      ? "border-fd-foreground bg-fd-foreground text-fd-primary-foreground shadow-sm"
                      : "border-fd-border/70 bg-fd-card text-fd-muted-foreground hover:border-fd-foreground/20 hover:text-fd-foreground",
                  )}
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {ICON_SIZES[size].label}
                </button>
              ))}
            </div>
          </div>

          {(copyError || loadError) && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/8 px-3 py-2 text-sm text-red-700 dark:text-red-300">
              {copyError ?? loadError}
            </div>
          )}
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              className="rounded-xl border border-fd-border/70 bg-fd-card/70 p-3"
              key={index}
            >
              <div className="mb-3 h-4 w-14 animate-pulse rounded bg-fd-muted" />
              <div className="min-h-28 animate-pulse rounded-xl border border-fd-border/60 bg-fd-muted/70" />
              <div className="mt-3 h-4 w-20 animate-pulse rounded bg-fd-muted" />
              <div className="mt-2 h-3 w-14 animate-pulse rounded bg-fd-muted/80" />
            </div>
          ))}
        </div>
      )}

      {!loading && iconModule && matchingIcons.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {visibleIcons.map((iconName) => {
              const SelectedIcon =
                iconModule.iconRegistry[iconName][selectedVariant];

              if (!SelectedIcon) {
                return null;
              }

              return (
                <IconCard
                  copiedState={copiedState}
                  iconName={iconName}
                  iconSize={selectedSize}
                  key={iconName}
                  onCopy={handleCopy}
                  selectedVariant={selectedVariant}
                  SelectedIcon={SelectedIcon}
                />
              );
            })}
          </div>

          <LoadMoreSentinel
            hasMore={hasMoreIcons}
            sentinelRef={sentinelRef}
            total={matchingIcons.length}
            visible={visibleIcons.length}
          />
        </>
      )}

      {!loading && iconModule && matchingIcons.length === 0 && (
        <div className="rounded-2xl border border-dashed border-fd-border/80 bg-fd-card/50 px-6 py-10 text-center">
          <h3 className="text-lg font-semibold text-fd-foreground">
            No icons found
          </h3>
          <p className="mt-2 text-sm text-fd-muted-foreground">
            Try a different search term or switch to another variant.
          </p>
          <button
            className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-fd-border/70 bg-fd-background px-4 text-sm font-medium text-fd-foreground transition hover:border-fd-foreground/20 hover:bg-fd-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring"
            onClick={clearFilters}
            type="button"
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
