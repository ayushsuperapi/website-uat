"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import { FadeInSection } from "../ui/fadeInSection";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { HeroSectionProps } from "@/types/sections";
import { Dialog } from "../ui/dialog";
import { ContactForm } from "../contactForm";

export function HeroSection({
  title = "10x faster APIs.",
  subtitle = "45% lower costs.\nZero engineering effort.",
  description = "SuperAPI is a plug-and-play API caching solution with automatic cache invalidation – built for dynamic APIs and fast-growing teams.",
  ctaText = "Try Live Playground",
}: HeroSectionProps): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const subtitleLines = subtitle.split("\n");

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:gap-4 items-center">
        <FadeInSection className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          {subtitleLines.map((line, index) => (
            <h2 key={index} className="text-4xl md:text-5xl font-bold mb-6">
              {line}
            </h2>
          ))}
          <p className="text-xl mb-10">{description}</p>
          <div className="flex gap-4">
            <Button onClick={openDialog} size="md" variant="primary">
              Talk to us
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://playground.trysuperapi.com"
              openInNewTab={true}
            >
              {ctaText}
            </Button>
          </div>
        </FadeInSection>

        <FadeInSection className="w-full md:w-1/2" delay={300}>
          <div className="relative">
            <div className="rounded-xl border border-gray-800 overflow-hidden">
              <Image
                src="/Dummy_img.jpg"
                alt="SuperAPI Dashboard Preview"
                className="w-full"
                width={100}
                height={60}
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="mt-8 flex items-center gap-2">
          <Image src="/yc_logo.png" alt="YC Icon" width={35} height={35} />
          <p className="text-white-400">Backed by Y Combinator</p>
        </div>
      </FadeInSection>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Contact Us">
        <ContactForm onClose={closeDialog} />
      </Dialog>
    </Section>
  );
}
