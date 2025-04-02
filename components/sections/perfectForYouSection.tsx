'use client';

import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import type { PerfectForYouSectionProps, SiteAttribute } from '@/types/sections';
import { JSX } from 'react';

const defaultAttributes: SiteAttribute[] = [
  { text: "You're a fast-growing company" },
  { text: "You're handling 50K+ API requests/hour" },
  { text: "You've got dynamic APIs and growing user bases" },
  { text: "You care about user experience" }
];

export function PerfectForYouSection({
  title = "SuperAPI is perfect for you.",
  attributes = defaultAttributes
}: PerfectForYouSectionProps): JSX.Element {
  return (
    <Section>
      <Card>
        <FadeInSection>
          <h2 className="text-4xl font-bold mb-10">{title}</h2>
          
          <div className="space-y-2 mb-4">
            {attributes.map((attribute, index) => (
              <div key={index} className="flex mb-2">
                <div className="inline-block bg-gray-800 px-4 py-1 rounded">
                  <p>{attribute.text}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </Card>
    </Section>
  );
}