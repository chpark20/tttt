import { useParams, Navigate } from 'react-router-dom';
import { getCourseBySlug } from '@/data/courses';
import { CourseDetail } from '@/components/courses/CourseDetail';

export default function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/courses" replace />;

  const course = getCourseBySlug(slug);
  if (!course) return <Navigate to="/courses" replace />;

  return <CourseDetail course={course} />;
}
