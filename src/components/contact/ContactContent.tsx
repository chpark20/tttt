import { useTranslations } from '@/contexts/LanguageContext';
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { CompanyInfoCard } from "./CompanyInfoCard";

export function ContactContent() {
  const t = useTranslations("contact");

  return (
    <div>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="container-custom py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <CompanyInfoCard />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
