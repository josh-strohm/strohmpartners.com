import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildLegalMetadata(
  "Privacy Policy",
  "How Strohm Partners collects, uses, discloses, and safeguards your information when you visit our website or interact with our services."
);

const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>
          We collect information to provide better services to our clients and
          website visitors.
        </p>
        <p>
          <strong className="text-ink-50">Information You Provide to Us:</strong>
        </p>
        <p>
          <em className="text-ink-50">Contact and Project Inquiries:</em> When
          you fill out our multi-step contact form, we collect your name, email
          address, company name, industry, and details about your operational
          bottlenecks, system integration needs, or consulting goals.
        </p>
        <p>
          <em className="text-ink-50">Billing and Financial Details:</em> If
          you engage us for services, we collect necessary billing details.
          Please note that all payments are processed through third-party
          secure payment processors (like Stripe), and we do not store credit
          card details directly on our servers.
        </p>
        <p>
          <strong className="text-ink-50">Information Collected Automatically:</strong>
        </p>
        <p>
          <em className="text-ink-50">Usage Data:</em> We may collect standard
          browser information, IP address, page views, and interaction details
          to optimize website performance and improve user experience.
        </p>
        <p>
          <em className="text-ink-50">Cookies:</em> We use cookies and similar
          tracking technologies to recall your settings and understand site
          traffic patterns. You can manage cookie preferences directly through
          your browser.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the collected information for various professional purposes:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>To respond to your inquiries, schedule strategic consultation calls, and scope operational audits.</li>
          <li>To deliver, monitor, and optimize our custom AI consulting, prompts tuning, and systems integration services.</li>
          <li>To manage your client account, process payments, and issue invoices.</li>
          <li>To ensure the security, integrity, and operational health of our digital systems.</li>
          <li>To comply with regulatory and legal obligations (such as financial reporting and Know Your Customer rules).</li>
        </ul>
      </>
    ),
  },
  {
    title: "Information Sharing and Disclosure",
    body: (
      <>
        <p>
          We value your trust. We do not sell, rent, or trade your personal
          information to third parties. We only share information with partners
          under specific, secure conditions:
        </p>
        <p>
          <strong className="text-ink-50">Service Providers:</strong> We share
          data with trusted vendors that support our business operations, such
          as hosting providers, email platforms, CRMs, and payment systems
          (specifically Stripe). These partners are contractually obligated to
          protect your data.
        </p>
        <p>
          <strong className="text-ink-50">Legal Compliance:</strong> We may
          disclose information if required to do so by law, court order, or
          governmental authority to comply with legal processes or protect
          rights and safety.
        </p>
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We implement industry-standard administrative, technical, and physical
        security measures to safeguard your personal data against loss, theft,
        and unauthorized access or modification. However, please note that no
        internet transmission or digital storage method is 100% secure, and we
        cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "Your Rights and Choices",
    body: (
      <>
        <p>
          Depending on your location, you may have specific privacy rights
          regarding your personal information:
        </p>
        <p>
          <strong className="text-ink-50">Access and Correction:</strong> You
          may request a copy of the personal information we hold about you or
          ask us to update/correct inaccurate details.
        </p>
        <p>
          <strong className="text-ink-50">Deletion:</strong> You may request
          that we delete your contact information, subject to certain
          exceptions (like outstanding payments or active regulatory compliance
          requirements).
        </p>
        <p>
          <strong className="text-ink-50">Opt-Out:</strong> You can opt-out of
          marketing communications at any time by clicking the
          &ldquo;Unsubscribe&rdquo; link in our emails or contacting us
          directly.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    body: (
      <p>
        Our website and services are intended exclusively for businesses and
        adults. We do not knowingly collect personal data from individuals
        under the age of 18.
      </p>
    ),
  },
  {
    title: "Updates to This Privacy Policy",
    body: (
      <p>
        We may revise this Privacy Policy from time to time. The updated
        version will be posted on this page with the revised &ldquo;Last
        Updated&rdquo; date. We encourage you to review this policy
        periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <>
          <p>
            Strohm Partners LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the Strohm Partners website and provides
            custom AI consulting, strategic advisory, and custom systems
            integration services. We are committed to protecting your privacy
            and ensuring a secure experience.
          </p>
          <p className="mt-4">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or interact
            with our services.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
