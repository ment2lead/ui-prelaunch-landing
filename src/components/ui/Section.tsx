import type { ReactNode } from 'react';
import { Container } from './Container';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 md:py-32 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
