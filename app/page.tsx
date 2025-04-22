import { HeroSection } from '@/components/sections/heroSection';
import { FeaturesSection } from '@/components/sections/featuresSection';
import { HowItWorksSection } from '@/components/sections/howItWorksSection';
import { ComparisonSection } from '@/components/sections/comparisonSection';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
      </main>
    </>
  );
}