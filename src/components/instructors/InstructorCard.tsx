import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Card, CardContent } from "@/components/ui/Card";
import { User } from "lucide-react";
import type { Instructor } from "@/types/education";

export function InstructorCard({ instructor }: { instructor: Instructor }) {
  const t = useTranslations("instructors");
  const locale = useLocale() as "ko" | "en";

  return (
    <Card hover className="h-full">
      <div className="p-4 pb-0">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
          <User className="w-20 h-20 text-primary/20" />
        </div>
      </div>
      <CardContent>
        <h3 className="text-lg font-bold text-text-primary mb-1">
          {instructor.name[locale]}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">
          {instructor.title[locale]}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
          {instructor.bio[locale]}
        </p>
        <div>
          <p className="text-xs text-text-muted mb-2">{t("specialties")}</p>
          <div className="flex flex-wrap gap-1.5">
            {instructor.specialties.map((specialty) => (
              <span key={specialty} className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
