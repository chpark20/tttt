import { useState } from "react";
import { useTranslations } from '@/contexts/LanguageContext';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const subject = encodeURIComponent(`[교육 상담] ${data.interest || "일반 문의"}`);
    const body = encodeURIComponent(
      `이름: ${data.name}\n이메일: ${data.email}\n연락처: ${data.phone || "-"}\n관심 분야: ${data.interest || "-"}\n\n${data.message}`
    );
    window.open(`mailto:edu@pbirobot.com?subject=${subject}&body=${body}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-section rounded-2xl border border-border p-12 text-center">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <p className="text-lg font-medium text-text-primary">{t("success")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-section rounded-2xl border border-border p-6 lg:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id="name"
          label={t("name")}
          placeholder={t("namePlaceholder")}
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          error={errors.email?.message}
          {...register("email")}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          id="phone"
          label={t("phone")}
          placeholder={t("phonePlaceholder")}
          {...register("phone")}
        />
        <div className="space-y-1.5">
          <label htmlFor="interest" className="block text-sm font-medium text-text-primary">
            {t("interest")}
          </label>
          <select
            id="interest"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            {...register("interest")}
          >
            <option value="">{t("interestPlaceholder")}</option>
            <option value="kids">{t("interestOptions.kids")}</option>
            <option value="teens">{t("interestOptions.teens")}</option>
            <option value="adults">{t("interestOptions.adults")}</option>
            <option value="corporate">{t("interestOptions.corporate")}</option>
            <option value="programs">{t("interestOptions.programs")}</option>
            <option value="other">{t("interestOptions.other")}</option>
          </select>
        </div>
      </div>
      <Textarea
        id="message"
        label={t("message")}
        placeholder={t("messagePlaceholder")}
        error={errors.message?.message}
        {...register("message")}
      />
      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        <Send className="w-4 h-4" />
        {t("submit")}
      </Button>
    </form>
  );
}
