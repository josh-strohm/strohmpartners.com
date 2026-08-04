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
        eyebrow="Start with the assessment"
        title={<>Stop losing hours to work a tool could handle.</>}
        description="A 45-minute conversation, 3–7 specific recommendations, and a short plan for putting the easiest wins in place."
        primaryCta={{ label: "Book your $999 assessment", href: "/book" }}
        secondaryCta={{ label: "Or send a message", href: "/contact" }}
      />
    </>
  );
}
