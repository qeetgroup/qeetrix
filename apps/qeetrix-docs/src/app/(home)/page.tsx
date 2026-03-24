import Link from 'next/link';
import { Manrope } from 'next/font/google';
import {
  ArrowRight,
  BookOpenText,
  Boxes,
  Layers3,
  MoonStar,
  Palette,
  Paintbrush2,
  Sparkles,
  SwatchBook,
} from 'lucide-react';

const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
});

const surfaceArea = [
  {
    title: 'Foundations',
    detail: 'Semantic tokens, radius scale, and Inter typography.',
    icon: SwatchBook,
  },
  {
    title: 'ThemeProvider',
    detail: 'Light, dark, and system mode with persistence and sync.',
    icon: MoonStar,
  },
  {
    title: 'Components',
    detail: 'Button and Accordion shipped from the current React package.',
    icon: Boxes,
  },
];

const highlights = [
  {
    title: 'Documented from source',
    detail:
      'The docs now describe the exports that exist today in `@qeetrix/react`, not placeholder starter pages.',
    icon: BookOpenText,
  },
  {
    title: 'Token-led styling',
    detail:
      'The docs shell now uses the same neutral color direction and typography choices as the design system package.',
    icon: Palette,
  },
  {
    title: 'Ready for expansion',
    detail:
      'The new structure gives you clear places to grow foundations, components, and utilities as the system evolves.',
    icon: Layers3,
  },
];

export default function HomePage() {
  return (
    <main className={`${display.variable} relative flex flex-1 overflow-hidden`}>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(24,24,27,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,0.035)_1px,transparent_1px)] bg-[length:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,25rem)] lg:items-center">
        <section className="flex flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 text-[0.78rem] font-medium text-zinc-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <Sparkles className="size-3.5" />
            Current Qeetrix design system docs
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl font-[family:var(--font-display)] text-3xl leading-tight font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-[3.35rem] dark:text-white">
              Qeetrix docs, rebuilt around the design system you ship today.
            </h1>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-zinc-600 dark:text-zinc-300">
              The docs now reflect the current `@qeetrix/react` package:
              semantic tokens, theme management, Button, Accordion, and the
              shared utility layer that ties them together.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-4.5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Open docs
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/75 px-4.5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/20 dark:hover:text-white"
            >
              Get started
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5 text-[0.78rem] font-medium text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              React 19
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              Tailwind 4
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 dark:border-white/10 dark:bg-white/5">
              Base UI primitives
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, detail, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-black/10 bg-white/72 p-5 shadow-[0_20px_56px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex size-10 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                  <Icon className="size-4" />
                </div>
                <h2 className="mt-4 font-[family:var(--font-display)] text-base font-semibold tracking-[-0.02em] text-zinc-950 dark:text-white">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <aside className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.14),transparent_50%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
          <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/75 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.1)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-zinc-500 dark:text-zinc-400">
                  Current Surface Area
                </p>
                <p className="mt-2 font-[family:var(--font-display)] text-xl font-semibold leading-tight tracking-[-0.03em] text-zinc-950 dark:text-white">
                  Small, intentional, and source-backed.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-white dark:border-white/10 dark:bg-white dark:text-black">
                v0.0.1
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {surfaceArea.map(({ title, detail, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-start gap-3.5 rounded-[1.5rem] border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-black/10"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p className="font-[family:var(--font-display)] text-base font-semibold tracking-[-0.02em] text-zinc-950 dark:text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-dashed border-black/15 bg-black px-4 py-3.5 text-sm text-white dark:border-white/15 dark:bg-white dark:text-zinc-950">
              <div className="flex items-center gap-3">
                <Paintbrush2 className="size-4 shrink-0" />
                The docs theme now follows the same neutral palette and
                typography direction as the Qeetrix package.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
