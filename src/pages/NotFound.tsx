import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[5rem] font-bold text-primary mb-2 leading-none">404</h1>
      <p className="text-xl font-medium text-gray-900 mb-2">페이지를 찾을 수 없습니다</p>
      <p className="text-gray-400 mb-8">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        to="/"
        className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
