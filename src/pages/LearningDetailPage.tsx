import { useParams, Navigate } from 'react-router-dom';
import { getLearningBySlug } from '@/data/learning';
import { LearningDetail } from '@/components/learning/LearningDetail';

export default function LearningDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/learning" replace />;

  const content = getLearningBySlug(slug);
  if (!content) return <Navigate to="/learning" replace />;

  return <LearningDetail content={content} />;
}
