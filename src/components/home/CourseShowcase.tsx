import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { courses } from "@/data/courses";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { formatPrice } from "@/lib/utils";
import { ArrowRight, Users, Clock, BarChart } from "lucide-react";

const ageGroupColors: Record<string, string> = {
  kids: "bg-edu-kids/10 text-edu-kids",
  teens: "bg-edu-teens/10 text-edu-teens",
  adults: "bg-edu-adults/10 text-edu-adults",
  corporate: "bg-edu-corporate/10 text-edu-corporate",
};

const showcaseCourses = [courses[0], courses[2], courses[4], courses[6]];

export function CourseShowcase() {
  const t = useTranslations("home.showcase");
  const tc = useTranslations("common");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("description")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseCourses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <Card hover className="h-full flex flex-col">
                <div className="p-4 pb-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/30" />
                    <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full ${ageGroupColors[course.ageGroup]}`}>
                      {tc(`ageGroups.${course.ageGroup}`)}
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
                      <span>{tc(`levels.${course.level}`)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-bold text-accent">
                      {formatPrice(
                        locale === "ko" ? course.price.krw : course.price.usd,
                        locale
                      )}
                    </span>
                    <Link to={`/courses/${course.slug}`}>
                      <Button size="sm" className="gap-1">
                        {tc("learnMore")}
                        <ArrowRight className="w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="outline" size="lg" className="gap-2">
                {tc("viewAll")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
