"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { siteContact } from "@/lib/site";

export type EnquiryType = "family" | "business";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: EnquiryType;
  message: string;
  /** Honeypot — real people leave this empty. */
  company: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-xl border border-line/70 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/60 outline-none transition-all duration-200 focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/10 hover:border-line disabled:opacity-60";

export function ContactForm({ defaultType = "family" }: { defaultType?: EnquiryType }) {
  const { t, lang } = useLanguage();
  const f = t.contact.form;

  const emptyForm: FormState = {
    name: "",
    email: "",
    phone: "",
    type: defaultType,
    message: "",
    company: "",
  };

  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus("success");
    } catch {
      // The message is not lost — the form keeps its values and the error state
      // offers the mailbox as a fallback.
      setStatus("error");
    }
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-line/70 bg-white shadow-ambient">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-5 px-8 py-16 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary-soft">
              <CheckCircle2 className="size-8 text-[#006d40]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-[1.4rem] font-semibold tracking-[-0.02em] text-ink">
                {f.successTitle}
              </h3>
              <p className="max-w-sm text-[0.95rem] leading-7 text-ink-muted">{f.successBody}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm);
                setStatus("idle");
              }}
              className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-brand-primary-strong underline-offset-4 hover:underline"
            >
              {f.sendAnother}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="space-y-5 p-7 md:p-8"
          >
            {/* Name + Email row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted"
                >
                  {f.name}{" "}
                  <span className="text-brand-primary" aria-label={f.required}>
                    *
                  </span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  disabled={status === "submitting"}
                  value={form.name}
                  onChange={handleChange}
                  placeholder={f.namePlaceholder}
                  className={inputBase}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted"
                >
                  {f.email}{" "}
                  <span className="text-brand-primary" aria-label={f.required}>
                    *
                  </span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  disabled={status === "submitting"}
                  value={form.email}
                  onChange={handleChange}
                  placeholder={f.emailPlaceholder}
                  className={inputBase}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted"
              >
                {f.phone}
                <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[0.66rem] font-medium normal-case tracking-normal text-ink-muted">
                  {f.phoneOptional}
                </span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                disabled={status === "submitting"}
                value={form.phone}
                onChange={handleChange}
                placeholder={f.phonePlaceholder}
                className={inputBase}
              />
            </div>

            {/* Audience toggle */}
            <fieldset className="space-y-2">
              <legend className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {f.type}
              </legend>
              <div className="flex gap-2">
                {(["family", "business"] as const).map((val) => (
                  <button
                    key={val}
                    type="button"
                    aria-pressed={form.type === val}
                    disabled={status === "submitting"}
                    onClick={() => setForm((prev) => ({ ...prev, type: val }))}
                    className={`flex-1 rounded-xl border py-3 text-[0.85rem] font-semibold transition-all duration-200 disabled:opacity-60 ${
                      form.type === val
                        ? "border-brand-primary bg-brand-primary-soft/60 text-brand-primary-strong shadow-sm"
                        : "border-line/70 bg-white text-ink-muted hover:border-brand-primary/30 hover:text-ink"
                    }`}
                  >
                    {val === "family" ? f.typeFamily : f.typeBusiness}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted"
              >
                {f.message}{" "}
                <span className="text-brand-primary" aria-label={f.required}>
                  *
                </span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                disabled={status === "submitting"}
                value={form.message}
                onChange={handleChange}
                placeholder={
                  form.type === "family"
                    ? f.messagePlaceholderFamily
                    : f.messagePlaceholderBusiness
                }
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Honeypot — hidden from people, tempting to bots */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <div
                role="alert"
                className="flex gap-3 rounded-xl border border-[#ba1a1a]/25 bg-[#ffdad6]/50 p-4"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-[#93000a]" />
                <div className="space-y-1">
                  <p className="text-[0.88rem] font-semibold text-[#93000a]">{f.errorTitle}</p>
                  <p className="text-[0.85rem] leading-6 text-ink-muted">
                    {f.errorBody}{" "}
                    <a
                      href={siteContact.emailHref}
                      className="font-semibold text-brand-primary-strong underline underline-offset-4"
                    >
                      {siteContact.email}
                    </a>
                  </p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full rounded-full shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 disabled:translate-y-0"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  {f.submitting}
                </>
              ) : (
                <>
                  {status === "error" ? f.errorRetry : f.submit}
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
