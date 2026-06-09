import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildLegalMetadata(
  "Refund & Cancellation Policy",
  "Our guidelines on billing, milestone approvals, cancellations, and refunds for Strohm Partners services."
);

const sections = [
  {
    title: "AI Consulting & System Integration Scopes",
    body: (
      <>
        <p>
          Custom advisory and integration roadmaps (including custom brand voice
          engineering, smart lead acquisition funnels, and custom operational
          bottleneck solutions) are structured around a detailed Statement of
          Work (SOW) or Consulting Agreement with defined milestone approvals.
        </p>
        <p>
          <strong className="text-ink-50">Milestone Approvals:</strong> At the
          completion of each strategic milestone (e.g., discovery audit,
          systems design blueprint, staging, production launch), we submit work
          for client review. Upon formal approval, the corresponding milestone
          payment is due.
        </p>
        <p>
          <strong className="text-ink-50">Non-Refundability:</strong> Once a
          milestone deliverable or strategic roadmap phase has been reviewed,
          approved, and billed, all fees paid for that milestone are strictly
          non-refundable. This reflects the dedicated consulting hours, system
          architecture engineering, and specialized advisory resources
          allocated to your business.
        </p>
        <p>
          <strong className="text-ink-50">Diagnostic Audit &amp; Discovery Deposits:</strong>{" "}
          Upfront payments for operational diagnostics, data mapping, and
          initial scoping sessions are non-refundable once the onboarding
          process has commenced.
        </p>
      </>
    ),
  },
  {
    title: "Project Cancellations",
    body: (
      <>
        <p>
          Either party may terminate an active service agreement or Statement
          of Work under the following terms:
        </p>
        <p>
          <strong className="text-ink-50">Cancellation Notice:</strong> Unless
          specified otherwise in your SOW, projects may be cancelled by
          providing 14 days written notice (via email) to our team.
        </p>
        <p>
          <strong className="text-ink-50">Final Billing:</strong> Upon
          receiving a cancellation request, all active work will cease. The
          client will be billed for all completed hours, deliverables, or
          proportional milestone progress up to the date of cancellation. Any
          outstanding payments must be settled within 7 business days.
        </p>
        <p>
          <strong className="text-ink-50">Transfer of Work:</strong> Any
          completed code, files, or custom configurations will be packaged and
          delivered to the client only after the final invoice has been paid
          in full.
        </p>
      </>
    ),
  },
  {
    title: "Strategic Retainers and Monitoring Subscriptions",
    body: (
      <>
        <p>
          Ongoing strategic consulting, custom model tuning, integration
          maintenance, and active system monitoring retainers are billed in
          advance on a recurring monthly or annual basis.
        </p>
        <p>
          <strong className="text-ink-50">No Long-Term Commitments:</strong>{" "}
          Clients may cancel recurring monthly consulting or monitoring
          retainers at any time.
        </p>
        <p>
          <strong className="text-ink-50">Cancellation Procedure:</strong> To
          cancel your subscription and prevent the next billing cycle from
          charging, you must submit a written cancellation request via email
          to <a href="mailto:help@strohmpartners.com" className="text-accent-300 hover:text-accent-200 transition-colors">help@strohmpartners.com</a> at least 5 business
          days prior to your renewal date.
        </p>
        <p>
          <strong className="text-ink-50">No Partial Refunds:</strong> Payments
          for monthly or annual retainers are processed automatically. We do
          not provide prorated refunds or credits for partial months or unused
          advisory hours within a billing cycle. Following cancellation, your
          services will continue uninterrupted until the end of your current
          paid billing period.
        </p>
      </>
    ),
  },
  {
    title: "Disputes and Payment Issues",
    body: (
      <>
        <p>
          We pride ourselves on honest partnerships, clear communication, and
          premium delivery. If you are unsatisfied with a deliverable or
          believe there has been a billing discrepancy:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>
            Please contact our client support team immediately at{" "}
            <a href="mailto:help@strohmpartners.com" className="text-accent-300 hover:text-accent-200 transition-colors">
              help@strohmpartners.com
            </a>
            . We will respond within 24 hours to review your feedback.
          </li>
          <li>
            We request that clients discuss any concerns directly with us
            before initiating card chargebacks or payment disputes, as we are
            committed to finding fair and cooperative resolutions.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Policy Revisions",
    body: (
      <p>
        We reserve the right to amend this Refund and Cancellation Policy at
        any time to align with service updates or financial regulations. Any
        revisions will be published on this page.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro={
        <>
          <p>
            Strohm Partners LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) provides custom AI consulting, operational
            audits, and custom system integration engineering services. Because
            our services are highly tailored, we maintain clear guidelines
            regarding billing, contract cancellations, and refunds.
          </p>
          <p className="mt-4">
            Please read this policy carefully before signing a service
            agreement, starting an operational audit, or initiating payments.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
