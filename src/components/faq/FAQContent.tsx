import { useState } from "react";
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { PageHeader } from "@/components/shared/PageHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { eduFaqData } from "@/data/edu-faq";
import { cn } from "@/lib/utils";

const categories = ["general", "courses", "programs", "payment"] as const;

export function FAQContent() {
  const t = useTranslations("faq");
  const locale = useLocale() as "ko" | "en";
  const [activeCategory, setActiveCategory] = useState<string>("general");

  const filteredFaqs = eduFaqData.filter((faq) => faq.category === activeCategory);

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question[locale],
    content: faq.answer[locale],
  }));

  return (
    <div>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="container-custom py-12 lg:py-16">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
                )}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
