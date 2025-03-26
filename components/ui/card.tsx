import type { CardProps } from '@/types/ui';
import { JSX } from 'react';

export function Card({
  children,
  className = ''
}: CardProps): JSX.Element {
  return (
    <div className={`border border-gray-800 rounded-xl p-10 ${className}`}>
      {children}
    </div>
  );
}