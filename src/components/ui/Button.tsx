import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'cyan' | 'outline' | 'ghost' | 'light';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  cyan: 'bg-brand-cyan text-[#08222a] hover:bg-[#3fdae8] shadow-[0_8px_30px_-8px_rgba(26,206,223,0.7)]',
  outline:
    'border border-white/30 text-white hover:border-brand-cyan hover:text-brand-cyan',
  ghost: 'text-white/80 hover:text-white',
  light: 'bg-night-900 text-white hover:bg-[#182c40]',
};

export function Button({
  children,
  variant = 'cyan',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-[0.95rem] font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:border disabled:border-white/15 disabled:bg-white/5 disabled:text-white/40 disabled:shadow-none ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
