import { Link } from 'react-router-dom';
import type { ButtonVariant, ButtonSize } from './Button.types';
import { ButtonVariantStyles, ButtonSizeStyles } from './Button.types';
import { type ReactNode } from 'react';

const BASE_STYLES = "inline-flex items-center justify-center rounded-full transition-all font-semibold shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_rgba(0,0,0,0.2)] hover:translate-y-[2px]";

export interface ButtonBaseProps {
  href?: string | undefined;
  onClick?: (() => void) | undefined;
}

export interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

export interface ButtonClickProps extends ButtonBaseProps {
  href?: never;
  onClick: () => void;
}

export interface ButtonCommonProps {
  variant?: ButtonVariant | undefined;
  size?: ButtonSize | undefined;
  children: ReactNode;
  className?: string | undefined;
}

type ButtonProps = (ButtonLinkProps | ButtonClickProps) & ButtonCommonProps;

export function Button({
  variant = 'newsletter',
  size = 'md',
  href,
  onClick,
  children,
  className = ''
}: ButtonProps): JSX.Element {
  const buttonStyles = `${BASE_STYLES} ${ButtonVariantStyles[variant]} ${ButtonSizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonStyles}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </button>
  );
};

export default Button;
