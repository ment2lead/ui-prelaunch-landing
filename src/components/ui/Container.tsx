import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-[1440px] px-[120px] ${className}`}>
      {children}
    </div>
  );
}
