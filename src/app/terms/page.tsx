import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildLegalMetadata(
  "Terms of Service",
  "The terms and conditions governing your use of Strohm Partners' services and website."
);

const sections = [
  {
    title: "Services Offered",
    body: (
      <>
        <p>
          Strohm Partners LLC is an AI consulting and systems engineering firm
          specializing in operational optimization and custom AI integrations,
          including:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>AI operational audits, workflow diagnostics, and operational bottleneck mapping.</li>
          <li>Intelligent acquisition funnels and custom web-based lead qualification systems.</li>
          <li>Content voice engineering, training frameworks, and custom prompt architectures.</li>
          <li>Custom API integrations, intelligent back-office pipelines, and data-extraction systems.</li>
        </ul>
        <p>
          Specific scopes of work, consulting milestones, roadmaps, and custom
          engineering deliverables will be detailed in individual service
          agreements or statements of work signed between you and Strohm
          Partners LLC.
        </p>
      </>
    ),
  },
  {
    title: "Fees and Payments",
    body: (
      <>
        <p>
          Clients agree to pay all fees specified in the relevant invoice,
          statement of work, or consulting agreement. Payments are processed
          securely via Stripe or bank transfer, as outlined in your billing
          agreement.
        </p>
        <p>
          <strong className="text-ink-50">Milestone-Based Billing:</strong>{" "}
          Custom consulting and system integration engagements are typically
          billed in structural stages (e.g., diagnostic audit deposit, systems
          architecture approval, staging integration, and production launch).
        </p>
        <p>
          <strong className="text-ink-50">Retainers and Subscriptions:</strong>{" "}
          Ongoing support, system optimization, prompt tuning, and active
          database monitoring agreements are billed in advance on a recurring
          monthly or annual basis.
        </p>
        <p>
          <strong className="text-ink-50">Late Payments:</strong> We reserve the
          right to temporarily suspend active systems integrations or ongoing
          consulting delivery if payments remain outstanding past their due
          date.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property and Ownership",
    body: (
      <>
        <p>
          At Strohm Partners, we believe you should fully own the AI systems we
          design and engineer for you.
        </p>
        <p>
          Upon receipt of full payment for completed services, Strohm Partners
          LLC transfers and assigns to you all intellectual property rights,
          title, and interest in and to the custom prompt frameworks, database
          configurations, API integrations, and code built specifically for
          your business under our agreement.
        </p>
        <p>
          Any pre-existing tools, open-source libraries, or third-party SaaS
          platforms (e.g., Make.com, Zapier, Webflow, Stripe, OpenAI,
          Anthropic) utilized in your custom integrations remain subject to
          their respective creators' and platforms' licensing terms, which you
          are responsible for maintaining directly.
        </p>
      </>
    ),
  },
  {
    title: "Client Responsibilities",
    body: (
      <>
        <p>To ensure successful implementation, clients agree to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>Provide timely access to necessary accounts, digital assets, and guidelines.</li>
          <li>Review deliverables and provide feedback within agreed timelines.</li>
          <li>Maintain the active subscriptions for third-party platforms utilized in their workflows.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    body: (
      <p>
        Our systems and services are provided on an &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo; basis. While we strive to build robust,
        highly automated workflows, Strohm Partners LLC does not guarantee that
        third-party APIs or automated pipelines will run continuously without
        occasional service disruptions, as their performance is dependent on
        external service providers.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        To the maximum extent permitted by law, Strohm Partners LLC shall not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, data, or business
        opportunities arising out of or related to your use of our services or
        website.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: (
      <p>
        These Terms and any dispute arising from your use of our site or
        services shall be governed by and construed in accordance with the
        laws of the State of Delaware, without regard to its conflict of law
        provisions.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    body: (
      <p>
        We reserve the right to modify these Terms at any time. Any changes
        will be posted on this page with an updated &ldquo;Last
        Updated&rdquo; date. Your continued engagement with our services
        following updates constitutes acceptance of the revised Terms.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <>
          <p>
            Welcome to Strohm Partners. These Terms of Service
            (&ldquo;Terms&rdquo;) govern your access to and use of the services,
            website, and digital systems provided by Strohm Partners LLC
            (&ldquo;Strohm Partners,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;).
          </p>
          <p className="mt-4">
            By accessing our website or engaging us for services, you agree to
            be bound by these Terms. If you do not agree to these Terms, please
            do not use our website or services.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
