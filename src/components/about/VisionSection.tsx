import { useTranslations } from '@/contexts/LanguageContext';
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function VisionSection() {
  const t = useTranslations("about");

  return (
    <>
      <PageHeader title={t("hero.title")} subtitle={t("hero.subtitle")} />

      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-section rounded-2xl border border-border p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">
                {t("vision.title")}
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {t("vision.description")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
