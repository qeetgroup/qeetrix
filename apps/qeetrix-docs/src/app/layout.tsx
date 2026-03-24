import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Qeetrix Docs',
    template: '%s | Qeetrix Docs',
  },
  description:
    'Documentation for the current Qeetrix React design system, components, tokens, and theming utilities.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={bodyFont.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
