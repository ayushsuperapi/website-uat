import { Container } from '@/components/ui/container';
import { JSX } from 'react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8">
      <Container>
        <p className="text-center text-gray-500">
          © {currentYear} SuperAPI Private Limited. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}