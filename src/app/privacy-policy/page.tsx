import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/privacy-policy", buildLegalMetadata(
  "Privacy Policy",
  "What information Strohm Partners collects, how we use it, and the choices you have when you visit our website or work with us."
));

const sections = [
  {
    title: "Information We Collect",
    body: (
      <>
        <p>
          We collect information we need to respond to inquiries, provide our
          services, and keep this website running.
        </p>
        <p>
          <strong className="text-ink-50">Information You Provide to Us:</strong>
        </p>
        <p>
          <em className="text-ink-50">Contact and project inquiries:</em> When
          you use our contact form, we collect your name, email address, company
          name, industry, and details about the work you want help with.
        </p>
        <p>
          <em className="text-ink-50">Billing and financial details:</em> If
          you hire us, we collect the billing information needed to provide the
          service. Payments go through third-party processors such as Stripe. We
          do not store your credit card number on our servers.
        </p>
        <p>
          <strong className="text-ink-50">Information Collected Automatically:</strong>
        </p>
        <p>
          <em className="text-ink-50">Usage data:</em> We may collect browser
          information, IP address, page views, and interaction details so we can
          understand how the site is used and fix problems.
        </p>
        <p>
          <em className="text-ink-50">Cookies:</em> We use cookies and similar
          technologies to remember your settings and understand site traffic.
          You can manage cookies in your browser.
        </p>
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>Respond to inquiries, schedule calls, and scope potential work.</li>
          <li>Deliver and improve our consulting and integration services.</li>
          <li>Manage client accounts, process payments, and send invoices.</li>
          <li>Protect the security and reliability of our systems.</li>
          <li>Meet legal and regulatory requirements, including financial reporting.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Information Sharing and Disclosure",
    body: (
      <>
        <p>
          We do not sell, rent, or trade your personal information. We share it
          only when someone needs it to help us operate the business or when the
          law requires it.
        </p>
        <p>
          <strong className="text-ink-50">Service providers:</strong> We may
          share information with vendors that support hosting, email, customer
          management, and payments, including Stripe. We require those vendors
          to protect the information they receive.
        </p>
        <p>
          <strong className="text-ink-50">Legal requirements:</strong> We may
          disclose information in response to a law, court order, government
          request, or other legal process.
        </p>
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We use administrative, technical, and physical steps to protect
        personal information from loss, theft, unauthorized access, and
        unauthorized changes. No online service or storage system is completely
        secure, so we cannot promise absolute security.
      </p>
    ),
  },
  {
    title: "Your Rights and Choices",
    body: (
      <>
        <p>
          Depending on where you live, you may have rights over your personal
          information, including:
        </p>
        <p>
          <strong className="text-ink-50">Access and correction:</strong> You
          may ask for a copy of the information we have about you or ask us to
          correct inaccurate information.
        </p>
        <p>
          <strong className="text-ink-50">Deletion:</strong> You may ask us to
          delete your contact information, subject to exceptions such as unpaid
          invoices or legal obligations.
        </p>
        <p>
          <strong className="text-ink-50">Opt out:</strong> You can stop
          marketing emails at any time by using the unsubscribe link or
          contacting us directly.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    body: (
      <p>
        Our website and services are for businesses and adults. We do not
        knowingly collect personal information from anyone under 18.
      </p>
    ),
  },
  {
    title: "Updates to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy as our services change or as the law
        requires. We will post the revised policy here and update the date.
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
            &ldquo;our&rdquo;) runs this website and provides AI consulting,
            practical advice, and systems integration. We take reasonable steps
            to protect the information you share with us.
          </p>
          <p className="mt-4">
            This Privacy Policy describes what we collect, how we use it, when
            we share it, and the choices you have when you use this website or
            work with us.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
