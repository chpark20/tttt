import { useTranslations } from '@/contexts/LanguageContext';
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Award, Shield, CheckCircle, Star, GraduationCap, Building } from "lucide-react";

const certifications = [
  { name: "교육부 인증", nameEn: "MOE Certified", icon: <Shield className="w-8 h-8" />, year: "2024" },
  { name: "STEAM 교육", nameEn: "STEAM Edu", icon: <GraduationCap className="w-8 h-8" />, year: "2024" },
  { name: "로봇학회 인증", nameEn: "Robotics Society", icon: <Award className="w-8 h-8" />, year: "2023" },
  { name: "ISO 9001", nameEn: "ISO 9001", icon: <CheckCircle className="w-8 h-8" />, year: "2023" },
  { name: "기술혁신기업", nameEn: "Inno-Biz", icon: <Star className="w-8 h-8" />, year: "2023" },
  { name: "기업교육 파트너", nameEn: "Corp. Partner", icon: <Building className="w-8 h-8" />, year: "2024" },
];

export function CertificationBadges() {
  const t = useTranslations("about.certifications");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("description")} />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.1}>
              <div className="flex flex-col items-center p-6 bg-section rounded-xl border border-border hover:border-primary/30 transition-colors text-center">
                <div className="text-primary mb-3">{cert.icon}</div>
                <span className="text-sm font-bold text-text-primary">{cert.name}</span>
                <span className="text-xs text-text-muted mt-1">{cert.year}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
