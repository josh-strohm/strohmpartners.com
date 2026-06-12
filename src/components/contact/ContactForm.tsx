"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more, at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

/**
 * Contact form. Submits to an N8N webhook URL set via NEXT_PUBLIC_N8N_WEBHOOK_URL.
 * Falls back to a no-op (logs + shows a friendly message) if the env var is not set
 * so the form is always usable in dev.
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    // If no webhook configured yet, simulate success so the form is still usable.
    if (!webhookUrl || webhookUrl.includes("YOUR_N8N_WEBHOOK_URL")) {
      console.warn(
        "[ContactForm] NEXT_PUBLIC_N8N_WEBHOOK_URL not set, submission logged to console only.",
        data
      );
      // Brief delay for UX
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      reset();
      return;
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "strohmpartners.com contact form",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook returned ${res.status}`);
      setStatus("success");
      reset();
    } catch (err) {
      console.error("[ContactForm] submission failed", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-ink-700/70 border border-ink-400/30 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.7)] p-6 sm:p-8 lg:p-10 flex flex-col gap-6"
    >
      <div>
        <h2 className="font-display text-3xl sm:text-4xl text-ink-50 leading-tight">
          Send a message
        </h2>
        <p className="mt-2 text-sm text-ink-300">
          I respond within one business day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field
          id="firstName"
          label="First name"
          error={errors.firstName?.message}
          inputProps={register("firstName")}
          placeholder="Jane"
        />
        <Field
          id="lastName"
          label="Last name"
          error={errors.lastName?.message}
          inputProps={register("lastName")}
          placeholder="Smith"
        />
      </div>
      <Field
        id="email"
        label="Email"
        type="email"
        error={errors.email?.message}
        inputProps={register("email")}
        placeholder="jane@company.com"
      />
      <Field
        id="phone"
        label="Phone"
        type="tel"
        error={errors.phone?.message}
        inputProps={register("phone")}
        placeholder="(555) 123-4567 (optional)"
      />
      <Field
        id="company"
        label="Company"
        error={errors.company?.message}
        inputProps={register("company")}
        placeholder="Acme Co. (optional)"
      />
      <Field
        id="website"
        label="Website"
        type="url"
        error={errors.website?.message}
        inputProps={register("website")}
        placeholder="https://example.com (optional)"
      />

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-[0.18em] text-ink-300 mb-2"
        >
          What can I help with?
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="A few sentences about your business and what you need help with…"
          {...register("message")}
          className={cn(
            "w-full rounded-xl bg-ink-900/60 border px-4 py-3 text-[15px] text-ink-50",
            "placeholder:text-ink-400 transition-colors",
            "focus:outline-none focus:border-accent-500/60 focus:bg-ink-900",
            errors.message
              ? "border-danger/60"
              : "border-ink-600 hover:border-ink-400"
          )}
        />
        {errors.message?.message && (
          <p className="mt-1.5 text-xs text-danger">{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-ink-300">
          By submitting, you agree that I can reach out about your inquiry.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-full bg-ink-50 text-ink-950",
            "h-12 px-6 text-[15px] font-medium transition-all",
            "hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed",
            "shadow-[0_0_30px_-8px_rgba(56,189,248,0.5)] hover:shadow-[0_0_40px_-6px_rgba(56,189,248,0.7)]"
          )}
        >
          {isSubmitting ? "Sending…" : "Send message"}
          {!isSubmitting && <span aria-hidden>→</span>}
        </button>
      </div>

      {status === "success" && (
        <div
          role="status"
          className="rounded-xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-success"
        >
          Got it. I'll be in touch within one business day.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          Something went wrong sending your message. Please email{" "}
          <a
            href="mailto:help@strohmpartners.com"
            className="underline underline-offset-2"
          >
            help@strohmpartners.com
          </a>{" "}
          directly.
        </div>
      )}
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  error?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  placeholder?: string;
};

function Field({ id, label, type = "text", error, inputProps, placeholder }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-xs uppercase tracking-[0.18em] text-ink-300 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...inputProps}
        className={cn(
          "w-full rounded-xl bg-ink-900/60 border px-4 py-3 text-[15px] text-ink-50",
          "placeholder:text-ink-400 transition-colors h-12",
          "focus:outline-none focus:border-accent-500/60 focus:bg-ink-900",
          error ? "border-danger/60" : "border-ink-600 hover:border-ink-400"
        )}
      />
      {error && <p className="mt-1.5 text-xs text-danger">{error}</p>}
    </div>
  );
}
