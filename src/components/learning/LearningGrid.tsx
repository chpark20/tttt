import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { LearningCard } from "./LearningCard";
import type { LearningContent } from "@/types/education";

export function LearningGrid({ contents }: { contents: LearningContent[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contents.map((content, index) => (
        <ScrollReveal key={content.id} delay={index * 0.1}>
          <LearningCard content={content} />
        </ScrollReveal>
      ))}
    </div>
  );
}
