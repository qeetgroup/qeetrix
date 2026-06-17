import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DirectionProvider,
  Input,
} from "@qeetrix/ui";

const meta: Meta<typeof DirectionProvider> = {
  title: "Primitives/DirectionProvider",
  component: DirectionProvider,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DirectionProvider>;

function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Input placeholder="Search…" />
      <div className="flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </div>
    </div>
  );
}

export const SideBySide: Story = {
  render: () => (
    <div className="grid gap-8 sm:grid-cols-2">
      <DirectionProvider direction="ltr">
        <p className="mb-2 text-xs font-medium text-muted-foreground">LTR</p>
        <Demo />
      </DirectionProvider>
      <DirectionProvider direction="rtl">
        <p className="mb-2 text-xs font-medium text-muted-foreground">RTL</p>
        <Demo />
      </DirectionProvider>
    </div>
  ),
};
