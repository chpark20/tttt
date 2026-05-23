import { useTranslations } from '@/contexts/LanguageContext';
import { cn } from "@/lib/utils";

interface CourseFilterProps {
  activeAgeGroup: string;
  activeLevel: string;
  onAgeGroupChange: (value: string) => void;
  onLevelChange: (value: string) => void;
}

const ageGroups = ["all", "kids", "teens", "adults", "corporate"] as const;
const levels = ["all", "beginner", "intermediate", "advanced"] as const;

export function CourseFilter({
  activeAgeGroup,
  activeLevel,
  onAgeGroupChange,
  onLevelChange,
}: CourseFilterProps) {
  const t = useTranslations("courses.filter");
  const tc = useTranslations("common");

  return (
    <div className="space-y-4 mb-12">
      <div>
        <p className="text-sm font-medium text-text-primary mb-2">{t("ageGroup")}</p>
        <div className="flex flex-wrap gap-2">
          {ageGroups.map((group) => (
            <button
              key={group}
              onClick={() => onAgeGroupChange(group)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeAgeGroup === group
                  ? "bg-primary text-white"
                  : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
              )}
            >
              {group === "all" ? t("all") : tc(`ageGroups.${group}`)}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary mb-2">{t("level")}</p>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeLevel === level
                  ? "bg-primary text-white"
                  : "bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border"
              )}
            >
              {level === "all" ? t("all") : tc(`levels.${level}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
