'use client';

import { JSX, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add/remove overflow hidden on body when mobile menu is open/closed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`py-3 sticky top-0 z-[60] bg-[#1E1E1E] ${isScrolled ? 'border-b border-[#333333]' : ''}`}>
        <Container className="flex justify-between items-center px-6" maxWidth="max-w-full md:max-w-[1600px] xl:max-w-full">
          <div className="flex items-center gap-1">
            <Link href="/">
              <Image 
                src="/website_logo.svg" 
                alt="SuperAPI Logo" 
                width={160} 
                height={160} 
                priority
                className="hover:opacity-90 transition-opacity"
              />
            </Link>
            {/* Desktop Navigation */}
            <nav className="ml-3 hidden md:flex gap-6">
              <a 
                href="https://platform.superapi.cloud/docs" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-lg hover:text-gray-300 transition-colors relative group ${pathname === '/docs' ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white' : ''}`}
              >
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <Link 
                href="/pricing"
                className={`text-white text-lg hover:text-gray-300 transition-colors relative group ${pathname === '/pricing' ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white' : ''}`}
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
          
          {/* Desktop Talk to us button */}
          <div className="hidden md:block">
            <Button 
              href="https://calendly.com/super-api/hello-from-super-api"
              openInNewTab={true}
              size="md"
              variant="primary"
            >
              Talk to us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </Container>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-[#1E1E1E]/95 backdrop-blur-sm border-l border-[#333333] transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-[70]`}
        >
          <div className="flex flex-col p-6">
            <button
              onClick={toggleMobileMenu}
              className="self-end p-2 mb-6 text-white hover:text-gray-300 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              <a 
                href="https://platform.superapi.cloud/docs" 
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-lg hover:text-gray-300 transition-colors ${
                  pathname === '/docs' ? 'text-blue-500' : ''
                }`}
              >
                Docs
              </a>
              <Link 
                href="/pricing"
                className={`text-white text-lg hover:text-gray-300 transition-colors ${
                  pathname === '/pricing' ? 'text-blue-500' : ''
                }`}
              >
                Pricing
              </Link>
              <Button 
                href="https://calendly.com/super-api/hello-from-super-api"
                openInNewTab={true}
                size="md"
                variant="primary"
                className="mt-4"
              >
                Talk to us
              </Button>
            </nav>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-[65]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
}