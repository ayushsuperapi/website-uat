'use client';

import Link from 'next/link';
import type { ButtonProps } from '@/types/ui';
import { JSX } from 'react';

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600/10'
};

const sizes = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2',
  lg: 'px-8 py-3 text-lg'
};

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  isFullWidth = false,
  disabled = false,
  href,
  openInNewTab = false
}: ButtonProps): JSX.Element {
  const buttonClasses = `
    ${variants[variant]} 
    ${sizes[size]} 
    ${isFullWidth ? 'w-full' : 'inline-flex'} 
    font-medium transition-colors flex items-center justify-center gap-2
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  // If href is provided, render as a link
  if (href) {
    if (openInNewTab) {
      return (
        <a 
          href={href} 
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex' }} // Ensure correct display
        >
          {icon && <span className="inline-block">{icon}</span>}
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={buttonClasses} style={{ display: 'inline-flex' }}>
        {icon && <span className="inline-block">{icon}</span>}
        {children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </button>
  );
}