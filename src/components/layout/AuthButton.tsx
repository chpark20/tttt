import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function AuthButton() {
  const { isAuthenticated, logout, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <Link
        to="/login"
        className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        로그인
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 hidden md:inline">
        {user?.email?.split('@')[0]}
      </span>
      <button
        onClick={() => logout()}
        className="text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        로그아웃
      </button>
    </div>
  );
}
