export const BUTTON_SIZES: {
  readonly sm: "sm";
  readonly md: "md";
  readonly lg: "lg";
} = {
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export const BUTTON_VARIANTS: {
  readonly newsletter: "newsletter";
  readonly volunteer: "volunteer";
  readonly donate: "donate";
} = {
  newsletter: "newsletter",
  volunteer: "volunteer",
  donate: "donate",
} as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const ButtonVariantStyles: {
  readonly [K in ButtonVariant]: string;
} = {
  [BUTTON_VARIANTS.newsletter]: "bg-purple text-white",
  [BUTTON_VARIANTS.volunteer]: "bg-copper text-white",
  [BUTTON_VARIANTS.donate]: "bg-maroon text-white",
} as const;

export const ButtonSizeStyles: {
  readonly [K in ButtonSize]: string;
} = {
  [BUTTON_SIZES.sm]: "text-small w-[100px] h-[30px]",
  [BUTTON_SIZES.md]: "text-body w-[140px] h-[40px]",
  [BUTTON_SIZES.lg]: "text-lg w-[180px] h-[50px]",
} as const;

export const ButtonColors: {
  readonly [K in ButtonVariant]: string;
} = {
  [BUTTON_VARIANTS.newsletter]: '#806ADB',
  [BUTTON_VARIANTS.volunteer]: '#B87333',
  [BUTTON_VARIANTS.donate]: '#800000',
} as const;

export interface ButtonConfig {
  text: string;
  link: string;
  variant: ButtonVariant;
}
