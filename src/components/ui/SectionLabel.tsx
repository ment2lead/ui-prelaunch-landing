import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  tone?: 'cyan' | 'slate' | 'purple';
};

const toneClasses = {
  cyan: 'text-brand-cyan',
  slate: 'text-brand-slate',
  purple: 'text-brand-purple',
} as const;

export function SectionLabel({
  children,
  tone = 'cyan',
}: SectionLabelProps) {
  return (
    <span
      className={`text-[0.8rem] font-semibold uppercase tracking-[0.22em] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
