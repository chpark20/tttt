import { useTranslations } from '@/contexts/LanguageContext';
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GraduationCap, Wrench, Users, Briefcase } from "lucide-react";

const highlights = [
  {
    key: "expert" as const,
    icon: <GraduationCap className="w-8 h-8" />,
    stat: "10+",
    statLabel: { ko: "전문 강사", en: "Expert Instructors" },
    color: "text-edu-kids bg-edu-kids/10 group-hover:bg-edu-kids/20",
  },
  {
    key: "handson" as const,
    icon: <Wrench className="w-8 h-8" />,
    stat: "80%",
    statLabel: { ko: "실습 비율", en: "Hands-on Ratio" },
    color: "text-edu-teens bg-edu-teens/10 group-hover:bg-edu-teens/20",
  },
  {
    key: "allAge" as const,
    icon: <Users className="w-8 h-8" />,
    stat: "5~60",
    statLabel: { ko: "대상 연령", en: "Age Range" },
    color: "text-edu-adults bg-edu-adults/10 group-hover:bg-edu-adults/20",
  },
  {
    key: "career" as const,
    icon: <Briefcase className="w-8 h-8" />,
    stat: "95%",
    statLabel: { ko: "만족도", en: "Satisfaction" },
    color: "text-edu-corporate bg-edu-corporate/10 group-hover:bg-edu-corporate/20",
  },
];

export function WhyUsSection() {
  const t = useTranslations("home.whyUs");
  const locale = (typeof window !== "undefined" ? document.documentElement.lang : "ko") as "ko" | "en";

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-section border border-border hover:border-primary/30 transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-colors ${item.color}`}>
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-accent mb-1">{item.stat}</div>
                <div className="text-xs text-text-muted mb-4 uppercase tracking-wider">
                  {item.statLabel[locale === "en" ? "en" : "ko"]}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {t(`${item.key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`${item.key}.description`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
