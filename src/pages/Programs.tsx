import { useState } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';
import { programs } from '@/data/programs';
import { PageHeader } from '@/components/shared/PageHeader';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ProgramGrid } from '@/components/programs/ProgramGrid';
import { cn } from '@/lib/utils';

const types = ['all', 'camp', 'workshop', 'field-trip', 'competition'] as const;

export default function Programs() {
  const t = useTranslations('programs');
  const [activeType, setActiveType] = useState<string>('all');

  const filtered =
    activeType === 'all'
      ? programs
      : programs.filter((p) => p.type === activeType);

  return (
    <div>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="container-custom py-12 lg:py-16">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  'px-5 py-2.5 text-sm font-medium rounded-lg transition-colors',
                  activeType === type
                    ? 'bg-primary text-white'
                    : 'bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover border border-border'
                )}
              >
                {t(`types.${type}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ProgramGrid programs={filtered} />
      </div>
    </div>
  );
}
