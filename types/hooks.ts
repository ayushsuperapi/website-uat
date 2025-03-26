import { RefObject } from 'react';

export interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export type IntersectionObserverHookReturn<T extends HTMLElement> = [
  RefObject<T>,
  boolean
];