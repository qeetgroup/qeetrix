import type { ComponentType, SVGProps } from "react";

const iconVariants = [
  "bold",
  "broken",
  "bulk",
  "linear",
  "outline",
  "twotone",
] as const;

type IconVariant = (typeof iconVariants)[number];

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

type BaseIconProps = IconProps & {
  variant?: IconVariant;
};

type IconComponent = ComponentType<IconProps>;

type IconRegistry<Name extends string = string> = Record<
  Name,
  Partial<Record<IconVariant, IconComponent>>
>;

export { iconVariants };

export type {
  BaseIconProps,
  IconComponent,
  IconProps,
  IconRegistry,
  IconVariant,
};
