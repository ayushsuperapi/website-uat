'use client';

import { useEffect, useRef, useState } from 'react';
import type { IntersectionObserverOptions } from '@/types/hooks';

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverOptions & { 
    triggerOnce?: boolean 
  } = {}
) {
  const { triggerOnce = false, ...observerOptions } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      
      if (triggerOnce && entry.isIntersecting && ref.current) {
        observer.unobserve(ref.current);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...observerOptions
    });

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce, observerOptions]);

  return [ref, isVisible] as const;
}