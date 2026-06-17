import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AspectRatio,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from "@qeetrix/ui";

const meta: Meta<typeof Carousel> = {
  title: "Primitives/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-72" opts={{ loop: true }}>
      <CarouselContent>
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{i + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const MultiPerView: Story = {
  render: () => (
    <Carousel className="w-96" opts={{ align: "start" }}>
      <CarouselContent>
        {Array.from({ length: 8 }, (_, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <div className="flex h-24 items-center justify-center rounded-md bg-muted text-2xl font-medium">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Carousel className="w-80">
      <CarouselContent>
        {[
          "1469474968028-56623f02e42e",
          "1500530855697-b586d89ba3ee",
          "1465146344425-f00d5f5c8f07",
        ].map((id) => (
          <CarouselItem key={id}>
            <AspectRatio ratio={16 / 9} className="rounded-md border">
              <img
                src={`https://images.unsplash.com/photo-${id}?w=640&q=80`}
                alt=""
                className="size-full object-cover"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Carousel orientation="vertical" className="h-64" opts={{ loop: true }}>
      <CarouselContent className="h-64">
        {Array.from({ length: 5 }, (_, i) => (
          <CarouselItem key={i} className="basis-1/2">
            <div className="flex h-full items-center justify-center rounded-md bg-muted text-2xl font-medium">
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
