'use client';

import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import type { HowItWorksSectionProps, Step } from '@/types/sections';
import { JSX } from 'react';

const defaultSteps: Step[] = [
  {
    number: "1",
    description: "Connect your API. Plug SuperAPI in front of existing REST or GraphQL APIs."
  },
  {
    number: "2",
    description: "Automatic caching and invalidation. Fresh data always, no manual rules."
  },
  {
    number: "3",
    description: "Deploy anywhere, in your cloud or regionally."
  }
];

export function HowItWorksSection({
  title = "How it works",
  steps = defaultSteps,
  imageSrc = "https://picsum.photos/id/237/200/100"
}: HowItWorksSectionProps): JSX.Element {
  return (
    <Section>
      <Card>
        <FadeInSection>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <img 
                src={imageSrc} 
                alt="SuperAPI Dashboard" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-10">{title}</h2>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.number}
                    </div>
                    <p className="text-lg">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </Card>
    </Section>
  );
}