import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ArrowRight, ArrowLeft, Clock, MapPin, Users, CheckCircle } from "lucide-react";
import type { Program } from "@/types/education";

export function ProgramDetail({ program }: { program: Program }) {
  const t = useTranslations("programs.detail");
  const tp = useTranslations("programs.types");
  const locale = useLocale() as "ko" | "en";

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {locale === "ko" ? "체험 프로그램으로 돌아가기" : "Back to Programs"}
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-primary/10 text-primary">
                {tp(program.type)}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {program.name[locale]}
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {program.description[locale]}
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-section rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm text-text-muted">{t("ageGroup")}</span>
                </div>
                <p className="text-sm font-medium text-text-primary">{program.ageGroup}</p>
              </div>
              <div className="bg-section rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm text-text-muted">{t("duration")}</span>
                </div>
                <p className="text-sm font-medium text-text-primary">{program.duration}</p>
              </div>
              <div className="bg-section rounded-xl border border-border p-5">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm text-text-muted">{t("location")}</span>
                </div>
                <p className="text-sm font-medium text-text-primary">{program.location[locale]}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6">{t("highlights")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {program.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-section rounded-xl border border-border">
                    <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-text-primary">{highlight[locale]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-border p-8 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {locale === "ko" ? "이 프로그램에 참가하고 싶으신가요?" : "Want to join this program?"}
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                {locale === "ko" ? "문의 주시면 상세 일정과 참가 방법을 안내해드립니다." : "Contact us for detailed schedule and registration information."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    {t("apply")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
