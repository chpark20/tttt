import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Clock, BarChart, Users } from "lucide-react";
import type { Course } from "@/types/education";

const ageGroupColors: Record<string, string> = {
  kids: "bg-edu-kids/10 text-edu-kids",
  teens: "bg-edu-teens/10 text-edu-teens",
  adults: "bg-edu-adults/10 text-edu-adults",
  corporate: "bg-edu-corporate/10 text-edu-corporate",
};

export function CourseCard({ course }: { course: Course }) {
  const t = useTranslations("common");
  const locale = useLocale() as "ko" | "en";

  return (
    <Card hover className="h-full flex flex-col">
      <div className="p-4 pb-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
          <Users className="w-16 h-16 text-primary/20" />
          <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full ${ageGroupColors[course.ageGroup]}`}>
            {t(`ageGroups.${course.ageGroup}`)}
          </span>
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full bg-white/90 text-text-secondary border border-border">
            {t(`levels.${course.level}`)}
          </span>
        </div>
      </div>
      <CardContent className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {course.name[locale]}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 flex-1">
          {course.description[locale]}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <BarChart className="w-3.5 h-3.5" />
            <span>{course.schedule[locale]}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-lg font-bold text-accent">
            {formatPrice(locale === "ko" ? course.price.krw : course.price.usd, locale)}
          </span>
          <Link to={`/courses/${course.slug}`}>
            <Button size="sm" className="gap-1">
              {t("learnMore")}
              <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
