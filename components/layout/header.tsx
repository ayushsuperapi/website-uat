'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Dialog } from '@/components/ui/dialog';
import { ContactForm } from '../contactForm';

export function Header(): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <header className="py-6">
        <Container className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/superapilogo.png" 
              alt="SuperAPI Logo" 
              width={32} 
              height={32} 
              priority
            />
            <div className="text-2xl font-bold">SuperAPI</div>
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