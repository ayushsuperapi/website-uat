'use client';

import Image from 'next/image';
import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import type { HowItWorksSectionProps, Step } from '@/types/sections';
import { JSX } from 'react';

const defaultSteps: Step[] = [
  {
    number: "1.",
    description: "Plug & Play - Install in under 30 minutes with no code changes. SuperAPI sits in front of your APIs as a gateway."
  },
  {
    number: "2.",
    description: "Smart Caching - We cache API responses automatically and serve them in milliseconds. Misses go to your origin."
  },
  {
    number: "3.",
    description: "Auto Invalidation - SuperAPI listens to your database via CDC and invalidates only the affected caches."
  },
  {
    number: "4.",
    description: "Scales Effortlessly - Designed to handle millions of requests with consistent low latency."
  }
];

export function HowItWorksSection({
  title = "How SuperAPI works",
  steps = defaultSteps,
}: HowItWorksSectionProps): JSX.Element {
  return (
    <Section>
      <Card>
        <FadeInSection>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <Image 
                src="/Dummy_img.jpg"
                alt="SuperAPI Dashboard" 
                className="w-full rounded-lg"
                width={100}
                height={60}
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-10">{title}</h2>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-white text-lg">
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