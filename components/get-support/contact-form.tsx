"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: "family" | "business";
  message: string;
};

const inputBase =
  "w-full rounded-xl border border-line/70 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/60 outline-none transition-all duration-200 focus:border-brand-primary/50 focus:ring-2 focus:ring-brand-primary/10 hover:border-line";

export function ContactForm() {
  const { t } = useLanguage();
  const f = t.getSupport.form;

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    type: "family",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a short async delay then show success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-line/70 bg-white shadow-ambient">
      <AnimatePresence mode="wait">
        {submitted ? (
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
              <p className="max-w-sm text-[0.95rem] leading-7 text-ink-muted">
                {f.successBody}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", phone: "", type: "family", message: "" });
              }}
              className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-brand-primary-strong underline-offset-4 hover:underline"
            >
              Send another message
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
                <label className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {f.name} <span className="text-brand-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Maria Garcia"
                  className={inputBase}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                  {f.email} <span className="text-brand-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="maria@example.com"
                  className={inputBase}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {f.phone}
                <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[0.66rem] font-medium normal-case tracking-normal text-ink-muted">
                  {f.phoneOptional}
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={inputBase}
              />
            </div>

            {/* I am a... toggle */}
            <div className="space-y-2">
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {f.type}
              </label>
              <div className="flex gap-2">
                {(["family", "business"] as const).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, type: val }))}
                    className={`flex-1 rounded-xl border py-3 text-[0.85rem] font-semibold transition-all duration-200 ${
                      form.type === val
                        ? "border-brand-primary bg-brand-primary-soft/60 text-brand-primary-strong shadow-sm"
                        : "border-line/70 bg-white text-ink-muted hover:border-brand-primary/30 hover:text-ink"
                    }`}
                  >
                    {val === "family" ? f.typeFamily : f.typeBusiness}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
                {f.message} <span className="text-brand-primary">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={
                  form.type === "family"
                    ? "I am looking for help with the Self-Determination Program..."
                    : "I would like to learn more about inclusive workplace consulting..."
                }
                className={`${inputBase} resize-none`}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg active:translate-y-0 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  {f.submit}
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
