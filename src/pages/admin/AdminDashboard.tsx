import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import AdminGuard from '@/components/AdminGuard';
import '@/styles/admin.css';

interface UserProfile {
  id: string;
  email: string;
  display_name: string | null;
  created_at: string;
  last_sign_in_at: string | null;
  signup_domain: string | null;
  visited_sites: string[] | null;
}

interface Stats {
  totalUsers: number;
  todaySignups: number;
  weeklyActive: number;
  totalVisits: number;
}

const PAGE_SIZE = 10;

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<'members' | 'stats'>('members');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    todaySignups: 0,
    weeklyActive: 0,
    totalVisits: 0,
  });
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loadingData, setLoadingData] = useState(false);

  const fetchUsers = useCallback(async () => {
    if (!supabase) return;
    setLoadingData(true);

    const from = page * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    let query = supabase
      .from('user_profiles')
      .select(
        'id, email, display_name, created_at, last_sign_in_at, signup_domain, visited_sites',
        { count: 'exact' }
      )
      .order('created_at', { ascending: false })
      .range(from, to);

    if (search.trim()) {
      query = query.or(
        `email.ilike.%${search.trim()}%,display_name.ilike.%${search.trim()}%`
      );
    }

    const { data, count, error } = await query;

    if (error) {
      console.error('Error fetching users:', error.message);
    } else {
      setUsers((data as UserProfile[]) || []);
      setTotalCount(count || 0);
    }
    setLoadingData(false);
  }, [page, search]);

  const fetchStats = useCallback(async () => {
    if (!supabase) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const [totalRes, todayRes, weeklyRes] = await Promise.all([
      supabase.from('user_profiles').select('id', { count: 'exact', head: true }).contains('visited_sites', [window.location.hostname]),
      supabase
        .from('user_profiles')
        .select('id', { count: 'exact', head: true })
        .gte('created_at', today.toISOString()),
      supabase
        .from('user_profiles')
        .select('id', { count: 'exact', head: true })
        .gte('last_sign_in_at', weekAgo.toISOString()),
    ]);

    setStats({
      totalUsers: totalRes.count || 0,
      todaySignups: todayRes.count || 0,
      weeklyActive: weeklyRes.count || 0,
      totalVisits: totalRes.count || 0,
    });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (activeTab === 'stats') fetchStats();
  }, [activeTab, fetchStats]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(0);
    fetchUsers();
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">관리자 대시보드</h1>
            <p className="text-sm text-gray-500 mt-1">PBI 로봇 교육센터 관리 시스템</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            로그아웃
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white rounded-xl p-1 shadow-sm border border-gray-200 w-fit">
          <button
            onClick={() => setActiveTab('members')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              activeTab === 'members'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            회원관리
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
              activeTab === 'stats'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            통계
          </button>
        </div>

        {/* Members Tab */}
        {activeTab === 'members' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="이메일 또는 이름으로 검색..."
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
                >
                  검색
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">총 {totalCount}명의 회원</p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">이메일</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">이름</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">가입일</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">
                      최근 로그인
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">
                      가입 도메인
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">
                      방문 사이트
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loadingData ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12">
                        <div className="flex justify-center">
                          <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                        </div>
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-12 text-gray-400">
                        회원 데이터가 없습니다.
                      </td>
                    </tr>
                  ) : (
                    users.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 text-gray-900 font-medium">{u.email}</td>
                        <td className="px-4 py-3 text-gray-600">{u.display_name || '-'}</td>
                        <td className="px-4 py-3 text-gray-500">{formatDate(u.created_at)}</td>
                        <td className="px-4 py-3 text-gray-500">
                          {formatDate(u.last_sign_in_at)}
                        </td>
                        <td className="px-4 py-3 text-gray-500">{u.signup_domain || '-'}</td>
                        <td className="px-4 py-3 text-gray-500">
                          {u.visited_sites?.length ? (
                            <span className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                              {u.visited_sites.length}개
                            </span>
                          ) : (
                            '-'
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  {page * PAGE_SIZE + 1}-{Math.min((page + 1) * PAGE_SIZE, totalCount)} /{' '}
                  {totalCount}
                </p>
                <div className="flex gap-1">
                  <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
                  >
                    이전
                  </button>
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    const startPage = Math.max(0, Math.min(page - 2, totalPages - 5));
                    const p = startPage + i;
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          p === page
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {p + 1}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                    disabled={page >= totalPages - 1}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg disabled:opacity-40 hover:bg-gray-50 transition-colors"
                  >
                    다음
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-500">전체 회원</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stats.totalUsers.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-1">누적 가입자 수</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-500">오늘 가입</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">
                {stats.todaySignups.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-1">오늘 신규 가입</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-500">주간 활성</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {stats.weeklyActive.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-1">최근 7일 로그인</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-500">전체 방문</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                {stats.totalVisits.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-1">총 사이트 방문 수</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <Dashboard />
    </AdminGuard>
  );
}
