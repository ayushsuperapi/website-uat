import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/heroSection';
import { FeaturesSection } from '@/components/sections/featuresSection';
import { HowItWorksSection } from '@/components/sections/howItWorksSection';
import { PerfectForYouSection } from '@/components/sections/perfectForYouSection';
import { ComparisonSection } from '@/components/sections/comparisonSection';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PerfectForYouSection />
        <ComparisonSection />
      </main>
      <Footer />
    </>
  );
}