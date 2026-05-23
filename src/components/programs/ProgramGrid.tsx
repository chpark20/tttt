import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProgramCard } from "./ProgramCard";
import type { Program } from "@/types/education";

export function ProgramGrid({ programs }: { programs: Program[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program, index) => (
        <ScrollReveal key={program.id} delay={index * 0.1}>
          <ProgramCard program={program} />
        </ScrollReveal>
      ))}
    </div>
  );
}
