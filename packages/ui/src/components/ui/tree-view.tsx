"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface TreeNode {
  id: string
  label: React.ReactNode
  icon?: React.ComponentType<{ className?: string }>
  defaultOpen?: boolean
  children?: TreeNode[]
}

interface TreeViewProps extends React.ComponentProps<"div"> {
  data: TreeNode[]
}

/**
 * Hierarchical disclosure tree (file trees, nested log scopes, org units).
 * Data-driven: pass a `data` array of nodes with optional `children`. Branch
 * nodes expand/collapse; leaves are plain rows. State is local per node.
 */
function TreeView({ data, className, ...props }: TreeViewProps) {
  return (
    <div
      role="tree"
      data-slot="tree-view"
      className={cn("text-sm", className)}
      {...props}
    >
      {data.map((node) => (
        <TreeNodeItem key={node.id} node={node} level={0} />
      ))}
    </div>
  )
}

function TreeNodeItem({ node, level }: { node: TreeNode; level: number }) {
  const hasChildren = Boolean(node.children?.length)
  const [open, setOpen] = React.useState(node.defaultOpen ?? false)
  const Icon = node.icon
  const indent = {
    paddingInlineStart: `${level * 1 + 0.5}rem`,
  } as React.CSSProperties

  if (!hasChildren) {
    return (
      <div
        role="treeitem"
        data-slot="tree-item"
        style={indent}
        className="flex items-center gap-1.5 rounded-md py-1 pe-2 hover:bg-accent hover:text-accent-foreground"
      >
        <span aria-hidden className="size-4 shrink-0" />
        {Icon && <Icon className="size-4 shrink-0 text-muted-foreground" />}
        <span className="truncate">{node.label}</span>
      </div>
    )
  }

  return (
    <div role="treeitem" data-slot="tree-item" aria-expanded={open}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        style={indent}
        className="flex w-full items-center gap-1.5 rounded-md py-1 pe-2 text-start outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <ChevronRightIcon
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-90"
          )}
        />
        {Icon && <Icon className="size-4 shrink-0 text-muted-foreground" />}
        <span className="truncate">{node.label}</span>
      </button>
      {open && (
        <div role="group">
          {node.children!.map((child) => (
            <TreeNodeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export { TreeView }
export type { TreeNode, TreeViewProps }
