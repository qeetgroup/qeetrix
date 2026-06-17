"use client"

import * as React from "react"
import {
  type Column,
  type ColumnDef,
  type ColumnFiltersState,
  type ColumnPinningState,
  type ColumnSizingState,
  type ExpandedState,
  type Row,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useVirtualizer } from "@tanstack/react-virtual"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  DownloadIcon,
  PinIcon,
  PlusCircleIcon,
  Rows2Icon,
  Rows3Icon,
  SearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EmptyState } from "@/components/ui/empty-state"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Density = "comfortable" | "compact"

interface DataTableFacet {
  /** The column id this facet filters. The column must use `filterFn: "arrIncludesSome"`. */
  columnId: string
  /** Label shown on the filter trigger. */
  title: string
  /** Explicit options; if omitted, derived from the column's unique values. */
  options?: { label: string; value: string }[]
}

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
  /** Allow dragging column edges to resize. */
  enableColumnResizing?: boolean
  /** Allow pinning columns left/right (sticky) via each column's header menu. */
  enablePinning?: boolean
  /** Prepend an expander column; pair with `renderSubComponent`. */
  enableExpanding?: boolean
  getRowCanExpand?: (row: Row<TData>) => boolean
  /** Detail panel rendered beneath an expanded row (ignored when virtualized). */
  renderSubComponent?: (row: Row<TData>) => React.ReactNode
  /** Per-column multi-select filters shown in the toolbar. */
  facetedFilters?: DataTableFacet[]
  /** Show a "Export CSV" toolbar button (exports the filtered rows). */
  enableExport?: boolean
  exportFilename?: string
  /** Show a comfortable/compact density toggle. */
  enableDensity?: boolean
  defaultDensity?: Density
  /** Virtualize rows for large datasets. Requires `maxHeight`; disables pagination. */
  enableVirtualization?: boolean
  estimateRowHeight?: number
  /** Max body height (enables vertical scroll + sticky header). Number = px. */
  maxHeight?: number | string
  /** Persist sorting / visibility / sizing / pinning / density to localStorage. */
  persistKey?: string
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
const EXPANDER_COLUMN_ID = "__expander__"
const STRUCTURAL_COLUMN_IDS = new Set([SELECT_COLUMN_ID, EXPANDER_COLUMN_ID])

/** Humanise a column id ("createdAt" / "created_at" → "created At" → menu label). */
function columnLabel(id: string): string {
  return id.replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2")
}

/** Quote a CSV field if it contains a comma, quote, or newline. */
function csvField(value: unknown): string {
  const str = value == null ? "" : String(value)
  return /[",\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str
}

/** Sticky offsets + z-index for a pinned column. */
function pinStyles<TData>(column: Column<TData>): React.CSSProperties {
  const pinned = column.getIsPinned()
  if (!pinned) return {}
  return {
    position: "sticky",
    left: pinned === "left" ? column.getStart("left") : undefined,
    right: pinned === "right" ? column.getAfter("right") : undefined,
    zIndex: 2,
  }
}

/** Toolbar multi-select filter for a single column (faceted). */
function FacetedFilter<TData>({
  column,
  title,
  options,
}: {
  column?: Column<TData, unknown>
  title: string
  options?: { label: string; value: string }[]
}) {
  const facets = column?.getFacetedUniqueValues()
  const selected = new Set((column?.getFilterValue() as string[]) ?? [])
  const resolved =
    options ??
    Array.from(facets?.keys() ?? [])
      .filter((v) => v != null)
      .map((v) => ({ label: String(v), value: String(v) }))

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="sm" className="border-dashed">
            <PlusCircleIcon /> {title}
            {selected.size > 0 && (
              <>
                <Separator orientation="vertical" className="mx-1 h-4" />
                <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                  {selected.size}
                </Badge>
              </>
            )}
          </Button>
        }
      />
      <PopoverContent align="start" className="w-52 p-1">
        <div className="max-h-64 overflow-y-auto">
          {resolved.length === 0 && (
            <p className="px-2 py-1.5 text-sm text-muted-foreground">No options</p>
          )}
          {resolved.map((option) => {
            const isSelected = selected.has(option.value)
            return (
              <button
                key={option.value}
                type="button"
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                onClick={() => {
                  const next = new Set(selected)
                  if (isSelected) next.delete(option.value)
                  else next.add(option.value)
                  const values = Array.from(next)
                  column?.setFilterValue(values.length ? values : undefined)
                }}
              >
                <span
                  className={cn(
                    "flex size-4 items-center justify-center rounded-sm border",
                    isSelected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input",
                  )}
                >
                  {isSelected && <CheckIcon className="size-3" />}
                </span>
                <span className="flex-1 text-start">{option.label}</span>
                {facets?.get(option.value) != null && (
                  <span className="text-xs text-muted-foreground">
                    {facets.get(option.value)}
                  </span>
                )}
              </button>
            )
          })}
        </div>
        {selected.size > 0 && (
          <>
            <Separator className="my-1" />
            <Button
              variant="ghost"
              size="sm"
              className="w-full"
              onClick={() => column?.setFilterValue(undefined)}
            >
              Clear
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}

/**
 * DataTable wraps TanStack Table over the qeetrix Table primitives. Out of the
 * box: sorting, global search, pagination, column visibility, and row
 * selection. Opt-in enterprise depth: column resizing/pinning, row
 * virtualization, expandable detail rows, faceted filters, CSV export, a
 * density toggle, a sticky header, and `persistKey` state persistence. State is
 * managed internally; pass `columns` (use the re-exported `createColumnHelper`)
 * and `data`.
 */
function DataTable<TData, TValue>({
  columns,
  data,
  enableSearch = true,
  searchPlaceholder = "Search…",
  enableColumnVisibility = true,
  enableRowSelection = false,
  enableColumnResizing = false,
  enablePinning = false,
  enableExpanding = false,
  getRowCanExpand,
  renderSubComponent,
  facetedFilters,
  enableExport = false,
  exportFilename = "export.csv",
  enableDensity = false,
  defaultDensity = "comfortable",
  enableVirtualization = false,
  estimateRowHeight,
  maxHeight,
  persistKey,
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
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>({
    left: [],
    right: [],
  })
  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>({})
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const [density, setDensity] = React.useState<Density>(defaultDensity)

  // Hydrate persisted UI state once on mount.
  const hydrated = React.useRef(false)
  React.useEffect(() => {
    if (!persistKey || hydrated.current || typeof window === "undefined") return
    hydrated.current = true
    try {
      const saved = window.localStorage.getItem(`qx-datatable:${persistKey}`)
      if (!saved) return
      const s = JSON.parse(saved)
      if (s.sorting) setSorting(s.sorting)
      if (s.columnVisibility) setColumnVisibility(s.columnVisibility)
      if (s.columnSizing) setColumnSizing(s.columnSizing)
      if (s.columnPinning) setColumnPinning(s.columnPinning)
      if (s.density) setDensity(s.density)
    } catch {
      /* ignore malformed persisted state */
    }
  }, [persistKey])

  React.useEffect(() => {
    if (!persistKey || !hydrated.current || typeof window === "undefined") return
    window.localStorage.setItem(
      `qx-datatable:${persistKey}`,
      JSON.stringify({ sorting, columnVisibility, columnSizing, columnPinning, density }),
    )
  }, [persistKey, sorting, columnVisibility, columnSizing, columnPinning, density])

  const resolvedColumns = React.useMemo<ColumnDef<TData, TValue>[]>(() => {
    const extra: ColumnDef<TData, TValue>[] = []
    if (enableRowSelection) {
      extra.push({
        id: SELECT_COLUMN_ID,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
        size: 40,
        header: ({ table }) => (
          <Checkbox
            aria-label="Select all rows on this page"
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked === true)}
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
      })
    }
    if (enableExpanding) {
      extra.push({
        id: EXPANDER_COLUMN_ID,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
        size: 40,
        header: () => null,
        cell: ({ row }) =>
          row.getCanExpand() ? (
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={row.getIsExpanded() ? "Collapse row" : "Expand row"}
              onClick={row.getToggleExpandedHandler()}
            >
              {row.getIsExpanded() ? <ChevronDownIcon /> : <ChevronRightIcon />}
            </Button>
          ) : null,
      })
    }
    return extra.length ? [...extra, ...columns] : columns
  }, [columns, enableRowSelection, enableExpanding])

  const paginated = pageSize > 0 && !enableVirtualization
  const sizingEnabled = enableColumnResizing || enablePinning

  const table = useReactTable<TData>({
    data,
    columns: resolvedColumns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      rowSelection,
      columnPinning,
      columnSizing,
      expanded,
    },
    enableRowSelection,
    enableColumnResizing,
    columnResizeMode: "onChange",
    getRowCanExpand,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    onColumnSizingChange: setColumnSizing,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    ...(facetedFilters
      ? {
          getFacetedRowModel: getFacetedRowModel(),
          getFacetedUniqueValues: getFacetedUniqueValues(),
        }
      : {}),
    ...(paginated ? { getPaginationRowModel: getPaginationRowModel() } : {}),
    initialState: paginated ? { pagination: { pageIndex: 0, pageSize } } : undefined,
  })

  const selectedRows = table.getSelectedRowModel().rows
  const hideableColumns = table.getAllColumns().filter((c) => c.getCanHide())
  const rows = table.getRowModel().rows
  const colSpan = table.getVisibleLeafColumns().length || 1
  const hasColumnFilters = columnFilters.length > 0

  const cellPadding = density === "compact" ? "py-1.5" : undefined

  const scrollRef = React.useRef<HTMLDivElement>(null)
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => estimateRowHeight ?? (density === "compact" ? 40 : 52),
    overscan: 10,
  })

  const scrollable = enableVirtualization || maxHeight != null
  const virtualRows = enableVirtualization ? rowVirtualizer.getVirtualItems() : null
  const paddingTop = virtualRows?.length ? virtualRows[0].start : 0
  const paddingBottom =
    virtualRows?.length
      ? rowVirtualizer.getTotalSize() - virtualRows[virtualRows.length - 1].end
      : 0

  function exportCsv() {
    if (typeof window === "undefined") return
    const cols = table
      .getVisibleLeafColumns()
      .filter((c) => !STRUCTURAL_COLUMN_IDS.has(c.id))
    const header = cols.map((c) => csvField(columnLabel(c.id)))
    const body = table.getFilteredRowModel().rows.map((row) =>
      cols.map((c) => csvField(row.getValue(c.id))).join(","),
    )
    const csv = [header.join(","), ...body].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = exportFilename
    a.click()
    URL.revokeObjectURL(url)
  }

  const showToolbar =
    enableSearch ||
    enableColumnVisibility ||
    Boolean(facetedFilters?.length) ||
    enableDensity ||
    enableExport ||
    Boolean(toolbarActions)

  const renderRow = (row: Row<TData>) => (
    <React.Fragment key={row.id}>
      <TableRow data-state={row.getIsSelected() ? "selected" : undefined}>
        {row.getVisibleCells().map((cell) => (
          <TableCell
            key={cell.id}
            className={cn(cellPadding, cell.column.getIsPinned() && "bg-background")}
            style={{
              width: sizingEnabled ? cell.column.getSize() : undefined,
              ...pinStyles(cell.column),
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
      {!enableVirtualization && row.getIsExpanded() && renderSubComponent && (
        <TableRow className="hover:bg-transparent">
          <TableCell colSpan={colSpan} className="bg-muted/30 p-0">
            {renderSubComponent(row)}
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  )

  return (
    <div
      data-slot="data-table"
      data-density={density}
      className={cn("flex flex-col rounded-xl ring-1 ring-foreground/10", className)}
    >
      {showToolbar && (
        <div className="flex flex-col gap-2 border-b p-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 flex-wrap items-center gap-2">
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
            {facetedFilters?.map((facet) => (
              <FacetedFilter
                key={facet.columnId}
                column={table.getColumn(facet.columnId)}
                title={facet.title}
                options={facet.options}
              />
            ))}
            {hasColumnFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => table.resetColumnFilters()}
              >
                Reset
              </Button>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {enableDensity && (
              <Button
                variant="outline"
                size="icon-sm"
                aria-label={density === "compact" ? "Comfortable rows" : "Compact rows"}
                onClick={() =>
                  setDensity((d) => (d === "compact" ? "comfortable" : "compact"))
                }
              >
                {density === "compact" ? <Rows3Icon /> : <Rows2Icon />}
              </Button>
            )}
            {enableExport && (
              <Button variant="outline" size="sm" onClick={exportCsv}>
                <DownloadIcon /> Export
              </Button>
            )}
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

      <div
        ref={scrollRef}
        className={cn("relative w-full overflow-x-auto", scrollable && "overflow-y-auto")}
        style={maxHeight != null ? { maxHeight } : undefined}
      >
        <table
          data-slot="table"
          className="w-full caption-bottom text-sm"
          style={
            sizingEnabled
              ? { width: table.getTotalSize(), tableLayout: "fixed" }
              : undefined
          }
        >
          <TableHeader className={cn(scrollable && "sticky top-0 z-10 bg-background")}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const canSort = header.column.getCanSort()
                  const sorted = header.column.getIsSorted()
                  const content = header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        "relative",
                        header.column.getIsPinned() && "bg-background",
                      )}
                      style={{
                        width: sizingEnabled ? header.getSize() : undefined,
                        ...pinStyles(header.column),
                      }}
                    >
                      <div className="flex items-center gap-1">
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
                        {enablePinning &&
                          !STRUCTURAL_COLUMN_IDS.has(header.column.id) &&
                          !header.isPlaceholder && (
                            <DropdownMenu>
                              <DropdownMenuTrigger
                                render={
                                  <Button
                                    variant="ghost"
                                    size="icon-xs"
                                    className="ms-auto"
                                    aria-label="Column options"
                                  >
                                    <PinIcon
                                      className={cn(
                                        header.column.getIsPinned()
                                          ? "text-foreground"
                                          : "opacity-40",
                                      )}
                                    />
                                  </Button>
                                }
                              />
                              <DropdownMenuContent align="start">
                                <DropdownMenuItem
                                  onClick={() => header.column.pin("left")}
                                >
                                  Pin left
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => header.column.pin("right")}
                                >
                                  Pin right
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => header.column.pin(false)}>
                                  Unpin
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                      </div>
                      {enableColumnResizing && header.column.getCanResize() && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          onClick={(e) => e.stopPropagation()}
                          className={cn(
                            "absolute end-0 top-0 h-full w-1 cursor-col-resize touch-none select-none bg-border opacity-0 hover:opacity-100",
                            header.column.getIsResizing() && "bg-primary opacity-100",
                          )}
                        />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
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
            ) : enableVirtualization ? (
              <>
                {paddingTop > 0 && (
                  <tr>
                    <td style={{ height: paddingTop }} colSpan={colSpan} />
                  </tr>
                )}
                {virtualRows!.map((vr) => renderRow(rows[vr.index]))}
                {paddingBottom > 0 && (
                  <tr>
                    <td style={{ height: paddingBottom }} colSpan={colSpan} />
                  </tr>
                )}
              </>
            ) : (
              rows.map(renderRow)
            )}
          </TableBody>
        </table>
      </div>

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
export type { DataTableProps, DataTableFacet }
