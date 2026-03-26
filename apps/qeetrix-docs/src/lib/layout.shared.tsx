import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const gitConfig = {
  user: "qeetgroup",
  repo: "qeetrix",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        text: "Docs",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Getting Started",
        url: "/docs/getting-started",
        active: "nested-url",
      },
      {
        text: "Components",
        url: "/docs/components/button",
        active: "nested-url",
      },
      {
        text: "Icons",
        url: "/docs/icons",
        active: "nested-url",
      },
    ],
    nav: {
      title: (
        <span className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-2xl border border-black/10 bg-black text-xs font-semibold tracking-[0.2em] text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-black">
            QX
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">
            Qeetrix
          </span>
        </span>
      ),
      url: "/",
      transparentMode: "top",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
