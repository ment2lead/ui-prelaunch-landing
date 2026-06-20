import type { ReactNode } from 'react';
import { Container } from './Container';

type SectionProps = {
  children: ReactNode;
  id?: string;
  variant?: 'white' | 'muted';
  className?: string;
};

export function Section({
  children,
  id,
  variant = 'white',
  className = '',
}: SectionProps) {
  const bg = variant === 'muted' ? 'bg-neutral-50' : 'bg-white';

  return (
    <section id={id} className={`${bg} py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
