'use client';

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { FadeInSectionProps } from '@/types/ui';
import { JSX } from "react";

export function FadeInSection({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = false
}: FadeInSectionProps): JSX.Element {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ 
    threshold,
    triggerOnce
  });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-in-out ${className}`}
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
}