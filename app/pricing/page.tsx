'use client';

import { useState } from "react";
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { FadeInSection } from '@/components/ui/fadeInSection';
import { Dialog } from '@/components/ui/dialog';
import { ContactForm } from '@/components/contactForm';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const [requestsM, setRequestsM] = useState<string>("25"); // default 25M
  const [payloadSize, setPayloadSize] = useState<string>("40"); // in KB
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const requests = parseFloat(requestsM) * 1_000_000 || 0;
  const toGB = (reqs: number, sizeKB: number): number => (reqs * sizeKB) / (1024 * 1024);

  const basePrice = 249;
  const includedRequests = 25000000;
  const includedGB = 1000; // simplified to 1000 GB

  const extraRequests = Math.max(0, requests - includedRequests);
  const extraGB = Math.max(0, toGB(requests, parseFloat(payloadSize) || 0) - includedGB);

  const superAPIPrice = basePrice + (extraRequests / 1_000_000) * 10 + extraGB * 0.09;

  const handleRequestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setRequestsM(value);
    }
  };

  const handlePayloadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPayloadSize(value);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Section>
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard Plan */}
          <Card className="p-8">
            <FadeInSection>
              <h2 className="text-2xl font-bold mb-8">Standard Plan</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold mb-4">$249<span className="text-base font-normal">/month</span></div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Includes 25M API requests
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Includes 1000 GB of data transfer
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      $10 per additional 1M requests
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      $0.09 per additional GB
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      Logs & Metrics included
                    </p>
                  </div>
                </div>

                {/* Calculator */}
                <div className="pt-6 border-t border-[#333333]">
                  <h3 className="text-lg font-semibold mb-4">Calculate your monthly price</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Monthly API Requests (in millions)
                      </label>
                      <input
                        type="text"
                        inputMode="decimal"
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={requestsM}
                        onChange={handleRequestsChange}
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Average Payload Size (KB)
                      </label>
                      <input
                        type="text"
                        inputMode="decimal"
                        className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={payloadSize}
                        onChange={handlePayloadChange}
                        placeholder="0"
                      />
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-br from-[#1E1E1E] to-[#2a2a2a] rounded-lg">
                      <h3 className="font-semibold mb-2">Estimated monthly price</h3>
                      <p className="text-3xl font-bold">${superAPIPrice.toFixed(2)}</p>
                    </div>

                    <div className="mt-6">
                      <Button 
                        href="https://calendly.com/super-api/hello-from-super-api"
                        openInNewTab={true}
                        variant="primary"
                        className="w-full"
                      >
                        Talk to us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </Card>

          {/* Enterprise Plan */}
          <Card className="p-8">
            <div className="absolute inset-0 rounded-lg pointer-events-none"></div>
            <FadeInSection delay={200}>
              <h2 className="text-2xl font-bold mb-8">Enterprise Plan</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-gray-300 mb-6">Enterprise-ready migration & pricing strategies.</p>
                  <p className="font-semibold">Build a plan that is perfect for the scale and complexity of your distributed network.</p>
                </div>
              </div>
            </FadeInSection>
          </Card>
        </div>
      </div>

      <Dialog isOpen={isDialogOpen} onClose={closeDialog} title="Talk to us">
        <ContactForm onClose={closeDialog} />
      </Dialog>
    </Section>
  );
} 