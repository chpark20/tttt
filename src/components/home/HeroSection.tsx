import { useTranslations } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Bot, Users, Sparkles } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: "min(85vh, 800px)", background: "linear-gradient(135deg, #0046C8 0%, #002E8A 50%, #1E3A5F 100%)" }}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" />
        <div className="absolute top-[35%] right-[20%] w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] right-[40%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[20%] right-[35%] w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[40%] right-[15%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase text-white/90 bg-white/10 rounded-full border border-white/20">
              {t("subtitle")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            <span className="text-white">{t("title").split(" ").slice(0, -2).join(" ")} </span>
            <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-white bg-clip-text text-transparent">{t("title").split(" ").slice(-2).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/courses">
              <Button size="lg" className="gap-2 bg-white text-primary hover:bg-gray-100 border-white shadow-lg shadow-black/15">
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="gap-2 text-white border-white/50 hover:bg-white/15 hover:border-white/80">
                {t("ctaSecondary")}
              </Button>
            </Link>
          </motion.div>

          {/* Feature icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Bot className="w-8 h-8" />, label: "로봇 코딩", color: "text-orange-300" },
              { icon: <GraduationCap className="w-8 h-8" />, label: "전문 교육", color: "text-purple-300" },
              { icon: <Users className="w-8 h-8" />, label: "전 연령 대상", color: "text-cyan-300" },
              { icon: <Sparkles className="w-8 h-8" />, label: "실습 중심", color: "text-emerald-300" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-300">
                <div className={`p-3 rounded-xl bg-white/10 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-white/90">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="scroll-indicator-mouse">
          <div className="scroll-indicator-wheel" />
        </div>
      </motion.div>
    </section>
  );
}
