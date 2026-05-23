import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const {
    login,
    signup,
    loginWithGoogle,
    loginWithKakao,
    resetPassword,
    error,
    loading,
    accountBlock,
    clearAccountBlock,
  } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [showResetForm, setShowResetForm] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMsg(null);

    if (!email || !password) {
      setLocalError('이메일과 비밀번호를 입력해주세요.');
      return;
    }

    const result = await login(email, password);
    if (!result.error) {
      navigate('/');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMsg(null);

    if (!email || !password) {
      setLocalError('이메일과 비밀번호를 입력해주세요.');
      return;
    }
    if (password.length < 6) {
      setLocalError('비밀번호는 최소 6자 이상이어야 합니다.');
      return;
    }
    if (password !== confirmPassword) {
      setLocalError('비밀번호가 일치하지 않습니다.');
      return;
    }

    const result = await signup(email, password);
    if (!result.error) {
      setSuccessMsg('회원가입 성공! 이메일 인증 후 로그인해주세요.');
      setTab('login');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMsg(null);

    if (!email) {
      setLocalError('이메일을 입력해주세요.');
      return;
    }

    const result = await resetPassword(email);
    if (!result.error) {
      setSuccessMsg('비밀번호 재설정 링크가 이메일로 전송되었습니다.');
      setShowResetForm(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLocalError(null);
    setSuccessMsg(null);
    await loginWithGoogle();
  };

  const handleKakaoLogin = async () => {
    setLocalError(null);
    setSuccessMsg(null);
    await loginWithKakao();
  };

  const displayError = localError || error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 pt-24 pb-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">PBI 교육센터</h1>
          <p className="text-gray-500">서비스 로그인</p>
        </div>

        {/* Account Block Alert */}
        {accountBlock && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-red-700">계정이 제한되었습니다</p>
                <p className="text-sm text-red-600 mt-1">{accountBlock.reason}</p>
                {accountBlock.suspended_until && (
                  <p className="text-xs text-red-500 mt-1">
                    해제 예정: {accountBlock.suspended_until}
                  </p>
                )}
              </div>
              <button
                onClick={clearAccountBlock}
                className="text-red-400 hover:text-red-600 text-lg leading-none"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Tabs */}
          {!showResetForm && (
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => {
                  setTab('login');
                  setLocalError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                  tab === 'login'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                로그인
              </button>
              <button
                onClick={() => {
                  setTab('register');
                  setLocalError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                  tab === 'register'
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                회원가입
              </button>
            </div>
          )}

          <div className="p-6">
            {/* Success Message */}
            {successMsg && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-700">{successMsg}</p>
              </div>
            )}

            {/* Error Message */}
            {displayError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{displayError}</p>
              </div>
            )}

            {/* Reset Password Form */}
            {showResetForm ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">비밀번호 재설정</h3>
                <p className="text-sm text-gray-500 mb-4">
                  가입하신 이메일을 입력하시면 재설정 링크를 보내드립니다.
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="name@example.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {loading ? '전송 중...' : '재설정 링크 전송'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowResetForm(false);
                    setLocalError(null);
                  }}
                  className="w-full py-2.5 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  로그인으로 돌아가기
                </button>
              </form>
            ) : tab === 'login' ? (
              /* Login Form */
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="비밀번호 입력"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {loading ? '로그인 중...' : '로그인'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowResetForm(true);
                    setLocalError(null);
                    setSuccessMsg(null);
                  }}
                  className="w-full text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  비밀번호를 잊으셨나요?
                </button>
              </form>
            ) : (
              /* Register Form */
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">이메일</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="6자 이상 입력"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                    placeholder="비밀번호 다시 입력"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors text-sm"
                >
                  {loading ? '가입 중...' : '회원가입'}
                </button>
              </form>
            )}

            {/* Divider */}
            {!showResetForm && (
              <>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-3 text-gray-400">또는</span>
                  </div>
                </div>

                {/* Google Login */}
                <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-3 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google로 로그인
                </button>

                {/* Kakao Login */}
                <button
                  type="button"
                  onClick={handleKakaoLogin}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all mt-3"
                  style={{ background: '#FEE500', color: '#191919' }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      d="M12 3C6.48 3 2 6.36 2 10.44c0 2.62 1.74 4.93 4.36 6.24-.19.7-.69 2.53-.79 2.93-.12.49.18.48.38.35.15-.1 2.44-1.66 3.43-2.33.85.13 1.73.19 2.62.19 5.52 0 10-3.36 10-7.38C22 6.36 17.52 3 12 3z"
                      fill="#191919"
                    />
                  </svg>
                  카카오로 계속하기
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          PBI 로봇 교육센터 &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
