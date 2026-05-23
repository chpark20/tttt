import { useParams, Navigate } from 'react-router-dom';
import { getProgramBySlug } from '@/data/programs';
import { ProgramDetail } from '@/components/programs/ProgramDetail';

export default function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/programs" replace />;

  const program = getProgramBySlug(slug);
  if (!program) return <Navigate to="/programs" replace />;

  return <ProgramDetail program={program} />;
}
