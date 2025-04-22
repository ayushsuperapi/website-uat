'use client';

import { JSX } from 'react';
import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import type { ComparisonSectionProps, ComparisonItem } from '@/types/sections';
import { Card } from '../ui/card';

const defaultOldWayItems: ComparisonItem[] = [
  { text: "APIs slow down under load" },
  { text: "You build and maintain your own cache logic" },
  { text: "Developers manage complex invalidation logic" },
  { text: "High latency = poor UX" },
  { text: "More infra needed to handle spikes" }
];

const defaultNewWayItems: ComparisonItem[] = [
  { text: "API responses in <10ms on cache hits" },
  { text: "Plug-and-play setup — no code changes" },
  { text: "Automatic, data-aware cache invalidation" },
  { text: "Lower infra costs, less backend load" },
  { text: "Scales from 10M to 1B+ requests with ease" }
];

export function ComparisonSection({
  oldWayTitle = "Without SuperAPI",
  newWayTitle = "With SuperAPI",
  oldWayItems = defaultOldWayItems,
  newWayItems = defaultNewWayItems,
  ctaText = "Try Live Playground"
}: ComparisonSectionProps): JSX.Element { 

  return (
    <Section>
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <Card className="w-full md:w-1/2 p-8 border">
          <FadeInSection>
            <h2 className="text-2xl font-bold mb-8">{oldWayTitle}</h2>
            
            <div className="space-y-4">
            {oldWayItems.map((item, index) => (
              <div key={index} className="flex gap-3">
                <li>{item.text}</li>
              </div>
            ))}
          </div>
          </FadeInSection>
        </Card>
        
        <Card className="w-full md:w-1/2 p-8 border border-[#2563EB] relative overflow-hidden">
          <div className="absolute inset-0 rounded-lg pointer-events-none"></div>
          
          <FadeInSection delay={200}>
            <h2 className="text-2xl font-bold mb-8">{newWayTitle}</h2>
            
            <div className="space-y-4">
            {newWayItems.map((item, index) => (
              <div key={index} className="flex gap-3">
                <li>{item.text}</li>
              </div>
            ))}
          </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button 
                href="https://calendly.com/super-api/hello-from-super-api"
                openInNewTab={true}
                variant="primary"
              >
                Talk to us
              </Button>
              <Button 
                variant="secondary" 
                href="https://playground.trysuperapi.com" 
                openInNewTab={true}
              >
                {ctaText}
              </Button>
            </div>
          </FadeInSection>
        </Card>
      </div>
    </Section>
  );
}