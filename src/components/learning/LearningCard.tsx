import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, BarChart, Play, FileText, Monitor } from "lucide-react";
import type { LearningContent } from "@/types/education";

const categoryIcons: Record<string, React.ReactNode> = {
  video: <Play className="w-12 h-12" />,
  document: <FileText className="w-12 h-12" />,
  interactive: <Monitor className="w-12 h-12" />,
};

const categoryColors: Record<string, string> = {
  video: "bg-red-50 text-red-500",
  document: "bg-blue-50 text-blue-500",
  interactive: "bg-green-50 text-green-500",
};

export function LearningCard({ content }: { content: LearningContent }) {
  const t = useTranslations("common");
  const tl = useTranslations("learning.categories");
  const locale = useLocale() as "ko" | "en";

  return (
    <Card hover className="h-full flex flex-col">
      <div className="p-4 pb-0">
        <div className={`aspect-[16/9] relative overflow-hidden rounded-lg flex items-center justify-center ${categoryColors[content.category]}`}>
          {categoryIcons[content.category]}
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full bg-white/90 text-text-secondary">
            {tl(content.category)}
          </span>
        </div>
      </div>
      <CardContent className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {content.title[locale]}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 flex-1">
          {content.description[locale]}
        </p>

        <div className="flex items-center gap-4 mb-4 text-xs text-text-muted">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{content.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-3.5 h-3.5" />
            <span>{t(`levels.${content.level}`)}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {content.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs bg-section text-text-muted rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        <Link to={`/learning/${content.slug}`} className="mt-auto">
          <Button variant="outline" size="sm" className="w-full gap-1">
            {t("learnMore")}
            <ArrowRight className="w-3 h-3" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
