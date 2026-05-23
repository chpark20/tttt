import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, MapPin, Users, Tent, Wrench, Bus, Trophy } from "lucide-react";
import type { Program } from "@/types/education";

const typeIcons: Record<string, React.ReactNode> = {
  camp: <Tent className="w-12 h-12" />,
  workshop: <Wrench className="w-12 h-12" />,
  "field-trip": <Bus className="w-12 h-12" />,
  competition: <Trophy className="w-12 h-12" />,
};

const typeColors: Record<string, string> = {
  camp: "bg-orange-50 text-orange-500",
  workshop: "bg-purple-50 text-purple-500",
  "field-trip": "bg-teal-50 text-teal-500",
  competition: "bg-yellow-50 text-yellow-500",
};

export function ProgramCard({ program }: { program: Program }) {
  const t = useTranslations("programs.types");
  const tc = useTranslations("common");
  const locale = useLocale() as "ko" | "en";

  return (
    <Card hover className="h-full flex flex-col">
      <div className="p-4 pb-0">
        <div className={`aspect-[16/9] relative overflow-hidden rounded-lg flex items-center justify-center ${typeColors[program.type]}`}>
          {typeIcons[program.type]}
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-full bg-white/90 text-text-secondary">
            {t(program.type)}
          </span>
        </div>
      </div>
      <CardContent className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-text-primary mb-2">
          {program.name[locale]}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 flex-1">
          {program.description[locale]}
        </p>

        <div className="space-y-2 mb-4 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            <span>{program.ageGroup}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{program.location[locale]}</span>
          </div>
        </div>

        <Link to={`/programs/${program.slug}`} className="mt-auto">
          <Button variant="outline" size="sm" className="w-full gap-1">
            {tc("learnMore")}
            <ArrowRight className="w-3 h-3" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
