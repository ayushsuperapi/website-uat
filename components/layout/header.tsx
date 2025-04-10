'use client';

import { JSX, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Dialog } from '@/components/ui/dialog';
import { ContactForm } from '../contactForm';

export function Header(): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <header className={`py-6 sticky top-0 z-50 bg-[#1E1E1E] ${isScrolled ? 'border-b border-[#333333]' : ''}`}>
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/website_logo.svg" 
              alt="SuperAPI Logo" 
              width={180} 
              height={180} 
              priority
            />
            <nav className="ml-4">
              <a 
                href="https://platform.superapi.cloud/docs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-gray-300 transition-colors relative group"
              >
                Docs
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
          <Button 
            onClick={openDialog}
            size="md"
            variant="primary"
          >
            Talk to us
          </Button>
        </Container>
      </header>

      <Dialog 
        isOpen={isDialogOpen} 
        onClose={closeDialog}
        title="Talk to us"
      >
        <ContactForm onClose={closeDialog} />
      </Dialog>
    </>
  );
}