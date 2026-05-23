import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Clock, BarChart, Tag, Play, FileText, Monitor, ArrowLeft } from "lucide-react";
import type { LearningContent } from "@/types/education";

const categoryIcons: Record<string, React.ReactNode> = {
  video: <Play className="w-24 h-24" />,
  document: <FileText className="w-24 h-24" />,
  interactive: <Monitor className="w-24 h-24" />,
};

const categoryColors: Record<string, string> = {
  video: "from-red-50 to-red-100 text-red-400",
  document: "from-blue-50 to-blue-100 text-blue-400",
  interactive: "from-green-50 to-green-100 text-green-400",
};

export function LearningDetail({ content }: { content: LearningContent }) {
  const t = useTranslations("learning.detail");
  const tc = useTranslations("common");
  const tl = useTranslations("learning.categories");
  const locale = useLocale() as "ko" | "en";

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Link to="/learning" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {locale === "ko" ? "온라인 학습으로 돌아가기" : "Back to Online Learning"}
            </Link>

            {/* Hero area */}
            <div className={`aspect-[21/9] rounded-2xl bg-gradient-to-br ${categoryColors[content.category]} flex items-center justify-center mb-8`}>
              {categoryIcons[content.category]}
            </div>

            {/* Content info */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                {tl(content.category)}
              </span>
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-section text-text-secondary border border-border">
                {tc(`levels.${content.level}`)}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {content.title[locale]}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t("duration")}: {content.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4" />
                <span>{t("level")}: {tc(`levels.${content.level}`)}</span>
              </div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {content.description[locale]}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4 text-text-muted mt-0.5" />
              {content.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm bg-section text-text-secondary rounded-lg border border-border">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="bg-section rounded-2xl border border-border p-8 text-center">
              <p className="text-lg text-text-secondary mb-4">
                {t("comingSoon")}
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  {tc("contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
