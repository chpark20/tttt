import { useTranslations } from '@/contexts/LanguageContext';
import { instructors } from "@/data/instructors";
import { PageHeader } from "@/components/shared/PageHeader";
import { InstructorGrid } from "@/components/instructors/InstructorGrid";

export function InstructorsContent() {
  const t = useTranslations("instructors");

  return (
    <div>
      <PageHeader title={t("title")} subtitle={t("subtitle")} />

      <div className="container-custom py-12 lg:py-16">
        <InstructorGrid instructors={instructors} />
      </div>
    </div>
  );
}
