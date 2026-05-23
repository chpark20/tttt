import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: { ko: "김서윤 학부모", en: "Parent Kim" },
    course: { ko: "키즈 로봇 탐험대", en: "Kids Robot Explorers" },
    rating: 5,
    text: {
      ko: "아이가 매주 토요일 수업을 손꼽아 기다립니다. 놀이처럼 즐기면서 코딩 개념을 자연스럽게 익히더라고요. 박민우 선생님이 정말 잘 이끌어주세요.",
      en: "My child looks forward to Saturday classes every week. They naturally learn coding concepts while having fun. Instructor Park is amazing with kids.",
    },
  },
  {
    name: { ko: "이준혁 (중3)", en: "Junhyuk Lee (9th grade)" },
    course: { ko: "청소년 AI 로봇 프로젝트", en: "Teen AI Robot Project" },
    rating: 5,
    text: {
      ko: "학교에서 배울 수 없는 AI와 로봇의 실전 프로젝트를 경험했습니다. 덕분에 과학 경진대회에서 수상할 수 있었어요!",
      en: "I experienced real AI and robot projects that I couldn't learn at school. Thanks to this, I won a science competition!",
    },
  },
  {
    name: { ko: "박지영 (직장인)", en: "Jiyoung Park (Professional)" },
    course: { ko: "성인 로봇 프로그래밍 기초", en: "Adult Robot Programming" },
    rating: 5,
    text: {
      ko: "코딩 경험이 전혀 없었는데, 친절한 설명과 체계적인 커리큘럼 덕분에 ROS2로 로봇을 움직일 수 있게 되었습니다. 야간 수업이라 직장인에게 딱이에요.",
      en: "I had zero coding experience, but thanks to clear explanations and systematic curriculum, I can now control robots with ROS2. Evening classes are perfect for working professionals.",
    },
  },
];

export function TestimonialSection() {
  const t = useTranslations("home.testimonials");
  const locale = useLocale() as "ko" | "en";

  return (
    <section className="py-24 lg:py-32 bg-section">
      <div className="container-custom">
        <ScrollReveal>
          <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote className="w-8 h-8 text-edu-teens/30 mb-4" />
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  &ldquo;{item.text[locale]}&rdquo;
                </p>
                <div>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-text-primary">{item.name[locale]}</p>
                  <p className="text-xs text-text-muted">{item.course[locale]}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
