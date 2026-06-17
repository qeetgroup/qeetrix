"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

/**
 * Calendar is a token-styled wrapper over react-day-picker (v9). It supports
 * every DayPicker mode (`single`, `multiple`, `range`) and forwards all props;
 * `DatePicker` / `DateRangePicker` compose it inside a Popover.
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "relative flex flex-col gap-4 sm:flex-row",
        month: "flex w-full flex-col gap-4",
        month_caption: "flex h-8 items-center justify-center px-9",
        caption_label: "text-sm font-medium",
        nav: "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous: cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "size-7"
        ),
        button_next: cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "size-7"
        ),
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday:
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground",
        weeks: "",
        week: "mt-1 flex w-full",
        day: "relative flex-1 p-0 text-center text-sm",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "size-9 w-full rounded-md p-0 font-normal aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:hover:bg-primary aria-selected:hover:text-primary-foreground"
        ),
        range_start: "rounded-s-md bg-accent",
        range_middle:
          "rounded-none bg-accent [&>button]:bg-transparent [&>button]:text-accent-foreground [&>button]:aria-selected:bg-transparent [&>button]:aria-selected:text-accent-foreground",
        range_end: "rounded-e-md bg-accent",
        today:
          "[&>button:not([aria-selected])]:bg-accent [&>button:not([aria-selected])]:text-accent-foreground",
        outside: "[&>button]:text-muted-foreground [&>button]:opacity-50",
        disabled: "[&>button]:text-muted-foreground [&>button]:opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({
          className: chevronClassName,
          orientation,
        }: {
          className?: string
          orientation?: "left" | "right" | "up" | "down"
        }) => {
          const Icon = orientation === "left" ? ChevronLeftIcon : ChevronRightIcon
          return <Icon className={cn("size-4", chevronClassName)} />
        },
      }}
      {...props}
    />
  )
}

export { Calendar }
