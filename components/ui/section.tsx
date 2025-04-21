import type { SectionProps } from '@/types/ui';
import { Container } from './container';
import { JSX } from 'react';

export function Section({
  children,
  className = '',
  id
}: SectionProps): JSX.Element {
  return (
    <section id={id} className={`py-22 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}