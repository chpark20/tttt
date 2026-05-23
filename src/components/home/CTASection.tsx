import { useTranslations } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center" style={{ background: "linear-gradient(135deg, #0046C8 0%, #002E8A 50%, #1E3A5F 100%)" }}>
            {/* Background particles */}
            <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" />
            <div className="absolute bottom-[30%] right-[20%] w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[50%] left-[60%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="text-white">{t("title").split(" ").slice(0, -1).join(" ")} </span>
                <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-white bg-clip-text text-transparent">{t("title").split(" ").slice(-1).join(" ")}</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t("description")}
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100 border-white shadow-lg shadow-black/15">
                  {t("button")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
