'use client';

import { FadeInSection } from '../ui/fadeInSection';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import type { HeroSectionProps } from '@/types/sections';
import { JSX } from 'react';

export function HeroSection({
  title = '10x faster APIs.',
  subtitle = '45% lower costs.\nZero engineering effort.',
  description = 'SuperAPI is a plug-and-play API caching solution with automatic cache invalidation – built for dynamic APIs and fast-growing teams.',
  ctaText = 'Try Live Playground',
  imageSrc = 'https://picsum.photos/id/237/200/100'
}: HeroSectionProps): JSX.Element {
  const subtitleLines = subtitle.split('\n');

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:gap-4 items-center">
        <FadeInSection className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          {subtitleLines.map((line, index) => (
            <h2 key={index} className="text-4xl md:text-5xl font-bold mb-6">
              {line}
            </h2>
          ))}
          <p className="text-xl mb-10">
            {description}
          </p>
          <Button 
            variant="primary" 
            size="lg"
            icon="🎮"
          >
            {ctaText}
          </Button>
        </FadeInSection>

        <FadeInSection className="w-full md:w-1/2" delay={300}>
          <div className="relative">
            <div className="rounded-xl border border-gray-800 overflow-hidden">
              <img 
                src={imageSrc} 
                alt="SuperAPI Dashboard Preview" 
                className="w-full"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      
      <div className="mt-16 flex items-center gap-2">
      <div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center">
        <span className="text-white font-mono font-bold">Y</span>
      </div>
      <p className="text-white-400">Backed by Y Combinator</p>
    </div>
      
    </Section>
  );
}