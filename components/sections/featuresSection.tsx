'use client';

import Image from 'next/image';
import { FadeInSection } from '../ui/fadeInSection';
import { Section } from '@/components/ui/section';
import type { FeaturesSectionProps, Feature } from '@/types/sections';
import { JSX } from 'react';

const defaultFeatures: Feature[] = [
  {
    icon: "./trend-up.svg",
    title: "10x Faster APIs",
    description: "SuperAPI accelerates your API responses by caching dynamic data intelligently — reducing latency from hundreds of milliseconds to under 10ms."
  },
  {
    icon: "./check.svg",
    title: "Automatic cache invalidation",
    description: "SuperAPI monitors your database in real-time using CDC (Change Data Capture) to keep caches always fresh — no manual rules or TTLs."
  },
  {
    icon: "./star.svg",
    title: "Zero Code Changes",
    description: "No complex setup or code changes. SuperAPI plugs into your existing stack and starts caching in less than 30 minutes."
  },
  {
    icon: "./heart.svg",
    title: "Built for Scale",
    description: "From 10M to 1B+ requests per month — SuperAPI handles massive traffic with ease, backed by isolated infra and CDN-grade performance."
  }
];

export function FeaturesSection({
  features = defaultFeatures
}: FeaturesSectionProps): JSX.Element {

  const renderIcon = (icon: string) => {
    if (icon.includes('/') || icon.includes('.svg') || icon.includes('.png')) {
      return (
        <Image
          src={icon}
          alt="Feature icon"
          width={32}
          height={32}
          className="invert brightness-0 w-auto h-auto"
        />
      );
    }
    return <span className="text-2xl">{icon}</span>;
  };

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6">
        {features.map((feature, index) => (
          <FadeInSection key={index} delay={index * 100} triggerOnce={false}>
            <div className="text-center">
              <div className="flex items-center justify-center mx-auto mb-6">
              {renderIcon(feature.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </Section>
  );
}