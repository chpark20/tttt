import { HeroSection } from '@/components/home/HeroSection';
import { CourseShowcase } from '@/components/home/CourseShowcase';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseShowcase />
      <WhyUsSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
