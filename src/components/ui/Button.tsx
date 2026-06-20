import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'disabled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white hover:bg-neutral-800',
  outline:
    'border border-neutral-300 bg-white text-black hover:border-neutral-400',
  disabled:
    'border border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed',
};

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
  const resolvedVariant = disabled ? 'disabled' : variant;

  return (
    <button
      type={type}
      disabled={disabled || resolvedVariant === 'disabled'}
      className={`inline-flex items-center justify-center px-6 py-3 text-body font-semibold transition-colors ${variantClasses[resolvedVariant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
