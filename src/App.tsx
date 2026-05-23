import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const Learning = lazy(() => import('./pages/Learning'));
const LearningDetailPage = lazy(() => import('./pages/LearningDetailPage'));
const Programs = lazy(() => import('./pages/Programs'));
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage'));
const Instructors = lazy(() => import('./pages/Instructors'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/:slug" element={<LearningDetailPage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
