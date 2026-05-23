import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Clock, Calendar, BarChart, Users, CheckCircle } from "lucide-react";
import type { Course } from "@/types/education";

const ageGroupColors: Record<string, string> = {
  kids: "bg-edu-kids/10 text-edu-kids border-edu-kids/20",
  teens: "bg-edu-teens/10 text-edu-teens border-edu-teens/20",
  adults: "bg-edu-adults/10 text-edu-adults border-edu-adults/20",
  corporate: "bg-edu-corporate/10 text-edu-corporate border-edu-corporate/20",
};

export function CourseDetail({ course }: { course: Course }) {
  const t = useTranslations("courses.detail");
  const tc = useTranslations("common");
  const locale = useLocale() as "ko" | "en";

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`px-3 py-1 text-sm font-bold rounded-full border ${ageGroupColors[course.ageGroup]}`}>
                {tc(`ageGroups.${course.ageGroup}`)}
              </span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-section text-text-secondary border border-border">
                {tc(`levels.${course.level}`)}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {course.name[locale]}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {course.description[locale]}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-text-primary mb-6">{t("features")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.features.map((feature, i) => (
                  <div key={i} className="p-5 bg-section rounded-xl border border-border">
                    <h3 className="text-sm font-semibold text-text-primary mb-2">
                      {feature.title[locale]}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {feature.description[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Curriculum */}
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-text-primary mb-6">{t("curriculum")}</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-section rounded-xl border border-border">
                    <div className="shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary mb-1">
                        {item.title[locale]}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {item.description[locale]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal delay={0.15}>
              <div className="sticky top-28 bg-section rounded-2xl border border-border p-6 space-y-5">
                <div className="text-center pb-5 border-b border-border">
                  <p className="text-sm text-text-muted mb-1">{t("price")}</p>
                  <p className="text-3xl font-bold text-accent">
                    {formatPrice(locale === "ko" ? course.price.krw : course.price.usd, locale)}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-text-muted">{t("duration")}</p>
                      <p className="text-sm font-medium text-text-primary">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-text-muted">{t("schedule")}</p>
                      <p className="text-sm font-medium text-text-primary">{course.schedule[locale]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-text-muted">{t("level")}</p>
                      <p className="text-sm font-medium text-text-primary">{tc(`levels.${course.level}`)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-xs text-text-muted">{t("ageGroup")}</p>
                      <p className="text-sm font-medium text-text-primary">{tc(`ageGroups.${course.ageGroup}`)}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Link to="/contact" className="block">
                    <Button size="lg" className="w-full gap-2">
                      {t("enrollNow")}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      {t("inquiry")}
                    </Button>
                  </Link>
                </div>

                <div className="pt-4 border-t border-border space-y-2">
                  {[
                    locale === "ko" ? "소그룹 수업 운영" : "Small group classes",
                    locale === "ko" ? "수료증 발급" : "Certificate provided",
                    locale === "ko" ? "교재/키트 포함" : "Materials included",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
