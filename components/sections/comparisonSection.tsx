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
        <Card>
      <div className="flex flex-col gap-12 md:gap-0 md:flex-row">
        <FadeInSection className="w-full md:w-1/2">
          <h3 className="text-xl text-gray-400 mb-4 tracking-wider">THE OLD WAY</h3>
          <h2 className="text-3xl font-bold mb-8">{oldWayTitle}</h2>
          
          <div className="space-y-6">
            {oldWayItems.map((item, index) => (
              <div key={index} className="flex gap-3">
                <li>{item.text}</li>
              </div>
            ))}
          </div>
        </FadeInSection>
        
        <FadeInSection className="w-full md:w-1/2" delay={200}>
          <h3 className="text-xl text-blue-500 mb-4 tracking-wider">THE NEW WAY</h3>
          <h2 className="text-3xl font-bold mb-8">{newWayTitle}</h2>
          
          <div className="space-y-6">
            {newWayItems.map((item, index) => (
              <div key={index} className="flex gap-3">
                <li>{item.text}</li>
              </div>
            ))}
          </div>
          
          <div className='flex gap-4 mt-6'>
          <Button onClick={openDialog} size="md" variant="primary">
              Talk to us
            </Button>
            <Button 
            variant="secondary" 
            size="lg"
            href="https://playground.trysuperapi.com" 
            openInNewTab={true}
          >
            {ctaText}
          </Button>

          </div>
          
        </FadeInSection>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Contact Us">
        <ContactForm onClose={closeDialog} />
      </Dialog>
      </Card>
    </Section>
  );
}