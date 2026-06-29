import { Hero } from "@/components/home/Hero";
import { ValueStrips } from "@/components/home/ValueStrips";
import { OutcomesScroller } from "@/components/home/OutcomesScroller";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { HowWeWork } from "@/components/home/HowWeWork";
import { IdealClient } from "@/components/home/IdealClient";
import { SocialProof } from "@/components/home/SocialProof";
import { CTABand } from "@/components/layout/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrips />
      <OutcomesScroller />
      <ServicesPreview />
      <HowWeWork />
      <IdealClient />
      <SocialProof />
      <CTABand
        eyebrow="Let's work together"
        title={<>Let's find where AI can help your business.</>}
        description="A 30-minute discovery call. We'll talk about your business and where AI might fit. No sales pitch."
        primaryCta={{ label: "Book a free AI audit", href: "/book" }}
        secondaryCta={{ label: "Or send a message", href: "/contact" }}
      />
    </>
  );
}
