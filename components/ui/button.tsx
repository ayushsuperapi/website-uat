'use client';

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
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${isFullWidth ? 'w-full' : ''} 
        font-medium rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </button>
  );
}