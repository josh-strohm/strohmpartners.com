import type { Metadata } from "next";
import { LegalPage, buildLegalMetadata } from "@/components/legal/LegalPage";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = withCanonical("/refund-policy", buildLegalMetadata(
  "Refund & Cancellation Policy",
  "How billing, milestone approvals, cancellations, and refunds work for Strohm Partners services."
));

const sections = [
  {
    title: "AI Tools Assessment Guarantee",
    body: (
      <>
        <p>
          The AI Tools Assessment is a $999 one-time service. It includes a
          45-minute interview, a review of the conversation, a report with 3–7
          tool recommendations, and a 30-minute review call.
        </p>
        <p>
          <strong className="text-ink-50">Money-back guarantee:</strong> If the
          assessment does not identify at least five hours of possible savings
          each week, you may request a full refund of the assessment fee. This
          guarantee covers the assessment only. It does not cover third-party
          subscriptions or separately scoped implementation work.
        </p>
      </>
    ),
  },
  {
    title: "AI Consulting and System Integration",
    body: (
      <>
        <p>
          Custom consulting and integration work is governed by a Statement of
          Work or Consulting Agreement that describes the work, milestones, and
          approval points.
        </p>
        <p>
          <strong className="text-ink-50">Milestone approvals:</strong> At the
          end of each milestone, such as discovery, system design, staging, or
          launch, we send the work to you for review. Once you approve it, the
          milestone payment is due.
        </p>
        <p>
          <strong className="text-ink-50">Non-refundable work:</strong> Once a
          milestone or roadmap phase has been reviewed, approved, and billed,
          the fees for that milestone are non-refundable. They cover the time
          and resources committed to the work.
        </p>
        <p>
          <strong className="text-ink-50">Deposits:</strong> Payments for
          diagnostics, data mapping, and initial scoping are non-refundable once
          onboarding has begun.
        </p>
      </>
    ),
  },
  {
    title: "Project Cancellations",
    body: (
      <>
        <p>
          Either party may end an active service agreement or Statement of Work
          under the following terms:
        </p>
        <p>
          <strong className="text-ink-50">Cancellation notice:</strong>{" "}
          Unless your SOW says otherwise, either party may cancel a project with
          14 days&apos; written notice by email.
        </p>
        <p>
          <strong className="text-ink-50">Final billing:</strong> When we receive
          a cancellation request, active work stops. We bill for completed work,
          delivered materials, and progress through the cancellation date.
          Outstanding invoices are due within seven business days.
        </p>
        <p>
          <strong className="text-ink-50">Transfer of work:</strong> We deliver
          completed code, files, and configurations after the final invoice is
          paid in full.
        </p>
      </>
    ),
  },
  {
    title: "Ongoing Support and Monitoring",
    body: (
      <>
        <p>
          Ongoing consulting, model tuning, integration maintenance, and system
          monitoring are billed in advance each month or year.
        </p>
        <p>
          <strong className="text-ink-50">No long-term commitments:</strong>{" "}
          You may cancel a recurring monthly consulting or monitoring retainer
          at any time.
        </p>
        <p>
          <strong className="text-ink-50">How to cancel:</strong> Email{" "}
          <a href="mailto:help@strohmpartners.com" className="text-accent-300 hover:text-accent-200 transition-colors">help@strohmpartners.com</a>{" "}
          at least five business days before your renewal date to stop the next
          charge.
        </p>
        <p>
          <strong className="text-ink-50">No partial refunds:</strong> Monthly
          and annual retainers are charged automatically. We do not prorate
          refunds or credits for partial months or unused hours. Service
          continues through the end of the period you have paid for.
        </p>
      </>
    ),
  },
  {
    title: "Disputes and Payment Issues",
    body: (
      <>
        <p>
          We want to resolve payment or project concerns directly. If you are
          unhappy with a deliverable or think an invoice is incorrect:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2 marker:text-accent-500">
          <li>
            Email{" "}
            <a href="mailto:help@strohmpartners.com" className="text-accent-300 hover:text-accent-200 transition-colors">
              help@strohmpartners.com
            </a>
            . We will review your concern and respond within 24 hours.
          </li>
          <li>
            Please give us a chance to address the issue before filing a
            chargeback or payment dispute so we can work toward a fair solution.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Policy Revisions",
    body: (
      <p>
        We may update this Refund and Cancellation Policy as our services or
        financial obligations change. Any revision will be posted on this page.
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
            &ldquo;our&rdquo;) provides AI Tools Assessments, AI consulting,
            operational reviews, and system integration services. Because the
            work may range from a fixed-price assessment to a custom project,
            this policy explains how we handle billing, cancellations, and
            refunds.
          </p>
          <p className="mt-4">
            Please read this policy before signing a service agreement, starting
            a project review, or making a payment.
          </p>
          <p className="mt-4 text-sm text-ink-300">Last updated: May 19, 2026</p>
        </>
      }
      sections={sections}
    />
  );
}
