import { useState } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';
import { courses } from '@/data/courses';
import { PageHeader } from '@/components/shared/PageHeader';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { CourseFilter } from '@/components/courses/CourseFilter';
import { CourseGrid } from '@/components/courses/CourseGrid';

export default function Courses() {
  const t = useTranslations('courses');
  const [ageGroup, setAgeGroup] = useState('all');
  const [level, setLevel] = useState('all');

  const filtered = courses.filter((course) => {
    if (ageGroup !== 'all' && course.ageGroup !== ageGroup) return false;
    if (level !== 'all' && course.level !== level) return false;
    return true;
  });

  return (
    <div>
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="container-custom py-12 lg:py-16">
        <ScrollReveal>
          <CourseFilter
            activeAgeGroup={ageGroup}
            activeLevel={level}
            onAgeGroupChange={setAgeGroup}
            onLevelChange={setLevel}
          />
        </ScrollReveal>

        <CourseGrid courses={filtered} />
      </div>
    </div>
  );
}
