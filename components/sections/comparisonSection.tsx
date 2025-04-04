'use client';

import { JSX, useState } from 'react';
import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import type { ComparisonSectionProps, ComparisonItem } from '@/types/sections';
import { Dialog } from '../ui/dialog';
import { ContactForm } from '../contactForm';
import { Card } from '../ui/card';

const defaultOldWayItems: ComparisonItem[] = [
  { text: "Months of refactoring & query optimization" },
  { text: "Complex cache invalidation logic" },
  { text: "Expensive and limited Redis/Memcache" },
  { text: "Static caching with Cloudflare/TTL" }
];

const defaultNewWayItems: ComparisonItem[] = [
  { text: "Integrate in 30 minutes — no code changes" },
  { text: "Automatic cache invalidation" },
  { text: "More powerful, 20% of the cost" },
  { text: "Dynamic, smart caching — no stale data" }
];

export function ComparisonSection({
  oldWayTitle = "Without SuperAPI",
  newWayTitle = "With SuperAPI",
  oldWayItems = defaultOldWayItems,
  newWayItems = defaultNewWayItems,
  ctaText = "Try Live Playground"
}: ComparisonSectionProps): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
              <Button onClick={openDialog} variant="primary">
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

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Contact Us">
        <ContactForm onClose={closeDialog} />
      </Dialog>
    </Section>
  );
}