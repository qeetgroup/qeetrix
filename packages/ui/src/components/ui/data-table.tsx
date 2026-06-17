"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EmptyState } from "@/components/ui/empty-state"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  /** Show the toolbar global-search box. */
  enableSearch?: boolean
  searchPlaceholder?: string
  /** Show the toolbar column-visibility menu. */
  enableColumnVisibility?: boolean
  /** Prepend a checkbox column + selection strip with bulk actions. */
  enableRowSelection?: boolean
  /** Rows per page; `0` disables pagination (renders all rows). */
  pageSize?: number
  /** Actions rendered at the far right of the toolbar (e.g. a "New" button). */
  toolbarActions?: React.ReactNode
  /** Bulk actions for the selection strip; receives the currently selected rows. */
  bulkActions?: (rows: Row<TData>[]) => React.ReactNode
  /** Rendered in place of rows when there are none (or no matches). */
  emptyState?: React.ReactNode
  className?: string
}

const SELECT_COLUMN_ID = "__select__"

/** Humanise a column id ("createdAt" / "created_at" → "created At" → menu label). */
function columnLabel(id: string): string {
  return id.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2")
}

/**
 * DataTable wraps TanStack Table over the qeetrix Table primitives, with
 * sorting, global search, pagination, column visibility, and (optional) row
 * selection wired up out of the box. Pass `columns` (TanStack `ColumnDef`s —
 * use the re-exported `createColumnHelper`) and `data`; everything else is
 * opt-in. State is managed internally for the common case.
 */
function DataTable<TData, TValue>({
  columns,
  data,
  enableSearch = true,
  searchPlaceholder = "Search…",
  enableColumnVisibility = true,
  enableRowSelection = false,
  pageSize = 10,
  toolbarActions,
  bulkActions,
  emptyState,
  className,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})

  const resolvedColumns = React.useMemo<ColumnDef<TData, TValue>[]>(() => {
    if (!enableRowSelection) return columns
    const selectionColumn: ColumnDef<TData, TValue> = {
      id: SELECT_COLUMN_ID,
      enableSorting: false,
      enableHiding: false,
      header: ({ table }) => (
        <Checkbox
          aria-label="Select all rows on this page"
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onCheckedChange={(checked) =>
            table.toggleAllPageRowsSelected(checked === true)
          }
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          aria-label="Select row"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onCheckedChange={(checked) => row.toggleSelected(checked === true)}
        />
      ),
    }
    return [selectionColumn, ...columns]
  }, [columns, enableRowSelection])

  const paginated = pageSize > 0

  const table = useReactTable({
    data,
    columns: resolvedColumns,
    state: { sorting, columnFilters, globalFilter, columnVisibility, rowSelection },
    enableRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(paginated ? { getPaginationRowModel: getPaginationRowModel() } : {}),
    initialState: paginated ? { pagination: { pageIndex: 0, pageSize } } : undefined,
  })

  const selectedRows = table.getSelectedRowModel().rows
  const hideableColumns = table.getAllColumns().filter((c) => c.getCanHide())
  const rows = table.getRowModel().rows
  const colSpan = table.getVisibleLeafColumns().length || 1
  const showToolbar = enableSearch || enableColumnVisibility || Boolean(toolbarActions)

  return (
    <div
      data-slot="data-table"
      className={cn("flex flex-col rounded-xl ring-1 ring-foreground/10", className)}
    >
      {showToolbar && (
        <div className="flex flex-col gap-2 border-b p-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2">
            {enableSearch && (
              <div className="relative w-full sm:max-w-xs">
                <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder={searchPlaceholder}
                  aria-label="Search"
                  className="ps-9"
                />
              </div>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {enableColumnVisibility && hideableColumns.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline" size="sm">
                      <SlidersHorizontalIcon /> Columns
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="min-w-40">
                  <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {hideableColumns.map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      className="capitalize"
                    >
                      {columnLabel(column.id)}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {toolbarActions}
          </div>
        </div>
      )}

      {enableRowSelection && selectedRows.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 border-b bg-muted/40 px-4 py-2 text-sm">
          <span className="font-medium">{selectedRows.length} selected</span>
          <Button
            variant="ghost"
            size="sm"
            className="ms-auto"
            onClick={() => table.resetRowSelection()}
          >
            Clear
          </Button>
          {bulkActions?.(selectedRows)}
        </div>
      )}

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort()
                const sorted = header.column.getIsSorted()
                const content = header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())
                return (
                  <TableHead key={header.id}>
                    {canSort ? (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="-mx-1 inline-flex items-center gap-1 rounded px-1 py-0.5 hover:text-foreground"
                      >
                        {content}
                        {sorted === "asc" ? (
                          <ArrowUpIcon className="size-3.5" />
                        ) : sorted === "desc" ? (
                          <ArrowDownIcon className="size-3.5" />
                        ) : (
                          <ChevronsUpDownIcon className="size-3.5 opacity-40" />
                        )}
                      </button>
                    ) : (
                      content
                    )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell colSpan={colSpan} className="p-0">
                {emptyState ?? (
                  <EmptyState
                    title="No results"
                    description="Try adjusting your search or filters."
                  />
                )}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {paginated && table.getPageCount() > 1 && (
        <div className="flex items-center justify-between gap-2 border-t p-3 text-sm">
          <span className="text-muted-foreground">
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon /> Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next <ChevronRightIcon />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export { DataTable }
export type { DataTableProps }
