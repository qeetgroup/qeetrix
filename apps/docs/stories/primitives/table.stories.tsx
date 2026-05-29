import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  StatusPill,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@qeetrix/ui";

const meta: Meta<typeof Table> = {
  title: "Primitives/Table",
  component: Table,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Table>;

const rows = [
  ["sai@accenture.com", "active"],
  ["ada@qeet.in", "pending"],
  ["grace@qeet.in", "revoked"],
];

export const Default: Story = {
  render: () => (
    <Table className="w-96">
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([email, status]) => (
          <TableRow key={email}>
            <TableCell>{email}</TableCell>
            <TableCell>
              <StatusPill status={status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
