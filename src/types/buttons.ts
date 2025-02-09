import type { ButtonVariant } from '../components/ui/Button.types';

export interface IButtonConfig {
  text: string;
  link: string;
  variant: ButtonVariant;
}

export interface ICTASectionProps {
  title: string;
  description: string;
  primaryButton?: IButtonConfig;
  secondaryButton?: IButtonConfig;
  tertiaryButton?: IButtonConfig;
}
