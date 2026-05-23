import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CourseCard } from "./CourseCard";
import type { Course } from "@/types/education";

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <ScrollReveal key={course.id} delay={index * 0.1}>
          <CourseCard course={course} />
        </ScrollReveal>
      ))}
    </div>
  );
}
