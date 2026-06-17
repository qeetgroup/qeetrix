import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  DataTable,
  StatusPill,
  type ColumnDef,
} from "@qeetrix/ui";
import { PlusIcon, Trash2Icon } from "lucide-react";

type Member = {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Member";
  status: string;
  logins: number;
};

const data: Member[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@acme.com", role: "Owner", status: "active", logins: 1280 },
  { id: "2", name: "Alan Turing", email: "alan@acme.com", role: "Admin", status: "active", logins: 942 },
  { id: "3", name: "Grace Hopper", email: "grace@acme.com", role: "Admin", status: "active", logins: 877 },
  { id: "4", name: "Katherine Johnson", email: "katherine@acme.com", role: "Member", status: "pending", logins: 12 },
  { id: "5", name: "Margaret Hamilton", email: "margaret@acme.com", role: "Member", status: "active", logins: 433 },
  { id: "6", name: "Dorothy Vaughan", email: "dorothy@acme.com", role: "Member", status: "suspended", logins: 0 },
  { id: "7", name: "Annie Easley", email: "annie@acme.com", role: "Member", status: "active", logins: 211 },
  { id: "8", name: "Mary Jackson", email: "mary@acme.com", role: "Member", status: "active", logins: 188 },
  { id: "9", name: "Radia Perlman", email: "radia@acme.com", role: "Admin", status: "active", logins: 654 },
  { id: "10", name: "Barbara Liskov", email: "barbara@acme.com", role: "Member", status: "pending", logins: 4 },
  { id: "11", name: "Shafi Goldwasser", email: "shafi@acme.com", role: "Member", status: "active", logins: 97 },
  { id: "12", name: "Frances Allen", email: "frances@acme.com", role: "Member", status: "archived", logins: 23 },
];

const columns: ColumnDef<Member>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "role", header: "Role" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <StatusPill status={row.getValue("status")} />,
  },
  {
    accessorKey: "logins",
    header: "Logins",
    cell: ({ row }) => (
      <span className="tabular-nums">
        {(row.getValue("logins") as number).toLocaleString()}
      </span>
    ),
  },
];

const meta: Meta<typeof DataTable> = {
  title: "Primitives/DataTable",
  component: DataTable,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => <DataTable columns={columns} data={data} pageSize={5} />,
};

export const WithSelectionAndActions: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      pageSize={5}
      enableRowSelection
      searchPlaceholder="Search members…"
      toolbarActions={
        <Button size="sm">
          <PlusIcon /> New member
        </Button>
      }
      bulkActions={(rows) => (
        <Button variant="destructive" size="sm">
          <Trash2Icon /> Delete {rows.length}
        </Button>
      )}
    />
  ),
};

export const Empty: Story = {
  render: () => <DataTable columns={columns} data={[]} />,
};
