import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
      style={{
        background:
          "linear-gradient(135deg, #0046C8 0%, #002E8A 50%, #1E3A5F 100%)",
      }}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" />
        <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[60%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/75 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
