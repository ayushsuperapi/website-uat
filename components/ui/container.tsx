import { createElement, JSX } from 'react';
import type { ContainerProps } from '@/types/ui';

export function Container({
  children,
  className = '',
  as = 'div',
  maxWidth = 'container'
}: ContainerProps): JSX.Element {
  return createElement(
    as,
    { className: `${maxWidth} mx-auto px-4 ${className}` },
    children
  );
}