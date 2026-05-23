import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { InstructorCard } from "./InstructorCard";
import type { Instructor } from "@/types/education";

export function InstructorGrid({ instructors }: { instructors: Instructor[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {instructors.map((instructor, index) => (
        <ScrollReveal key={instructor.id} delay={index * 0.1}>
          <InstructorCard instructor={instructor} />
        </ScrollReveal>
      ))}
    </div>
  );
}
