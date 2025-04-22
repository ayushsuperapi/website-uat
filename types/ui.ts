import { JSX, ReactNode } from 'react';

export interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    icon?: ReactNode;
    isFullWidth?: boolean;
    disabled?: boolean;
    href?: string;
    openInNewTab?: boolean;
  }

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}