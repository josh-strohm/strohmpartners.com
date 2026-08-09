import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/terms", buildLegalMetadata(
  "Terms of Service",
  "The terms and conditions governing your use of Strohm Partners' services and website."
));

const sections = [
  {
    title: "Services Offered",
    body: (
      <>
        <p>
          Strohm Partners LLC provides a fixed-price AI Tools Assessment and
          optional implementation services, including:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>AI Tools Assessments with workflow review, tool recommendations, quick-start plans, and savings analysis.</li>
          <li>Process redesign, simple automation, and knowledge systems.</li>
          <li>Custom AI workflows, implementation projects, and team training.</li>
          <li>Ongoing AI Concierge strategy and implementation support.</li>
        </ul>
        <p>
          The exact work, milestones, deadlines, and deliverables will appear in
          the service agreement or statement of work you sign with Strohm
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
          You agree to pay the fees listed in your invoice, statement of work,
          or consulting agreement. We accept payment by Stripe or bank transfer,
          as described in your billing agreement.
        </p>
        <p>
          <strong className="text-ink-50">Milestone billing:</strong> Custom
          consulting and integration projects are usually billed in stages,
          such as the initial audit, systems design, staging, and launch.
        </p>
        <p>
          <strong className="text-ink-50">Retainers and subscriptions:</strong>{" "}
          Ongoing support, system updates, prompt tuning, and database
          monitoring are billed in advance each month or year.
        </p>
        <p>
          <strong className="text-ink-50">Late payments:</strong> We may pause
          active integrations or consulting work while an invoice remains
          overdue.
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property and Ownership",
    body: (
      <>
        <p>
          At Strohm Partners, we believe you should own the custom systems we
          build for your business.
        </p>
        <p>
          After you pay in full for the agreed work, Strohm Partners LLC
          transfers to you its rights and interest in the custom prompt
          frameworks, database configurations, integrations, and code created
          specifically for your business.
        </p>
        <p>
          Tools you already use, open-source libraries, and third-party services
          such as Make.com, Zapier, Webflow, and Stripe remain governed by their
          own licenses. You are responsible for maintaining those accounts and
          subscriptions.
        </p>
      </>
    ),
  },
  {
    title: "Client Responsibilities",
    body: (
      <>
        <p>To keep a project moving, you agree to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>Provide timely access to the accounts, files, and instructions we need.</li>
          <li>Review deliverables and send feedback within the agreed timeline.</li>
          <li>Keep active subscriptions for third-party services used in your workflows.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Disclaimer of Warranties",
    body: (
      <p>
        Our systems and services are provided as-is and as available. We work to
        build reliable workflows, but we cannot guarantee that third-party APIs
        or automated pipelines will run without interruptions. Their availability
        depends on outside providers.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent allowed by law, Strohm Partners LLC is not liable
        for indirect, incidental, special, consequential, or punitive damages,
        or for lost profits, data, or business opportunities resulting from your
        use of our services or website.
      </p>
    ),
  },
  {
    title: "Governing Law",
    body: (
      <p>
        These Terms and any dispute about your use of our website or services
        are governed by the laws of the State of Delaware, without regard to
        its conflict-of-law rules.
      </p>
    ),
  },
  {
    title: "Changes to These Terms",
    body: (
      <p>
        We may change these Terms from time to time. We will post changes here
        with a new Last Updated date. If you continue using our services after
        a change takes effect, you accept the revised Terms.
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
            Welcome to Strohm Partners. These Terms of Service (&ldquo;Terms&rdquo;)
            govern your use of our website, services, and digital systems.
            Strohm Partners LLC is referred to in these Terms as
            &ldquo;Strohm Partners,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our.&rdquo;
          </p>
          <p className="mt-4">
            By using our website or hiring us, you agree to these Terms. If you
            do not agree, please do not use the website or our services.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
