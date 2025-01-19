export type ButtonVariant = 'newsletter' | 'volunteer' | 'donate';

export const ButtonColors = {
  newsletter: '#806ADB',
  volunteer: '#B87333',
  donate: '#800000',
} as const;

export type ButtonColor = keyof typeof ButtonColors;

export interface ButtonConfig {
  text: string;
  link: string;
  variant: ButtonVariant;
}
