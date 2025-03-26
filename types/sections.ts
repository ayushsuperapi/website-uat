export interface Feature {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Step {
    number: string;
    description: string;
  }
  
  export interface ComparisonItem {
    text: string;
  }
  
  export interface SiteAttribute {
    text: string;
  }
  
  export interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    imageSrc?: string;
  }
  
  export interface FeaturesSectionProps {
    title?: string;
    features?: Feature[];
  }
  
  export interface HowItWorksSectionProps {
    title?: string;
    steps?: Step[];
    imageSrc?: string;
  }
  
  export interface PerfectForYouSectionProps {
    title?: string;
    attributes?: SiteAttribute[];
  }
  
  export interface ComparisonSectionProps {
    oldWayTitle?: string;
    newWayTitle?: string;
    oldWayItems?: ComparisonItem[];
    newWayItems?: ComparisonItem[];
    ctaText?: string;
  }
  
  export interface CTASectionProps {
    title?: string;
    buttonText?: string;
    placeholderText?: string;
  }