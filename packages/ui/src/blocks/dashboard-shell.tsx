"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  AppShell,
  AppShellContent,
  AppShellHeader,
  AppShellMain,
} from "@/components/ui/app-shell"

interface DashboardShellProps extends React.ComponentProps<"div"> {
  /** Navigation slot (pass the `Sidebar` system). Rendered beside the main column. */
  sidebar?: React.ReactNode
  /** Sticky top-bar content (search, breadcrumb, user menu). */
  header?: React.ReactNode
  /** Constrain content width and centre it. */
  contained?: boolean
}

/**
 * Reference application layout: a `Sidebar` slot beside a main column with a
 * sticky header and a scrollable content region. Wraps the `AppShell`
 * primitives so product teams get the standard dashboard frame in one element;
 * drop a `Sidebar` into `sidebar`, a `PageHeader`/toolbar into `header`, and
 * the page into `children`.
 */
function DashboardShell({
  sidebar,
  header,
  contained,
  className,
  children,
  ...props
}: DashboardShellProps) {
  return (
    <AppShell data-slot="dashboard-shell" className={className} {...props}>
      {sidebar}
      <AppShellMain>
        {header && <AppShellHeader>{header}</AppShellHeader>}
        <AppShellContent>
          <div className={cn(contained && "mx-auto w-full max-w-6xl")}>{children}</div>
        </AppShellContent>
      </AppShellMain>
    </AppShell>
  )
}

export { DashboardShell }
export type { DashboardShellProps }
