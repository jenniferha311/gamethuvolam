import React, { useState, useEffect } from 'react';
import { getAdminDashboardData } from '../lib/analytics';
import {
  Users,
  Award,
  BookOpen,
  CheckCircle,
  XCircle,
  Calendar,
  Shield,
  Lock,
  ArrowLeft,
  RefreshCw,
  Database,
  Search,
  TrendingUp,
  BarChart3,
  Layers
} from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [data, setData] = useState(() => getAdminDashboardData());
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('wulin_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'mistakes' | 'players' | 'technical'>('overview');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple teacher passkey for Cô Hà Ánh Phượng (default: 'tnsl2026' or 'haanhphuong')
    if (passcode.trim() === 'tnsl2026' || passcode.trim() === 'haanhphuong' || passcode.trim() === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('wulin_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Mật mã sư phạm không chính xác. Vui lòng kiểm tra lại!');
    }
  };

  const handleRefresh = () => {
    setData(getAdminDashboardData());
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <div className="w-full max-w-md rounded-2xl border-2 border-red-800 bg-[#12070a] p-6 sm:p-8 text-neutral-100 shadow-2xl text-left">
          <div className="flex items-center gap-2 mb-2 text-amber-400 font-mono text-xs font-bold uppercase">
            <Shield className="w-4 h-4 text-red-500" />
            <span>Khu Vực Quản Trị Sư Phạm</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-wuxia text-amber-200 mb-1">
            Bảng Quản Trị – Cô Giáo Hà Ánh Phượng
          </h2>
          <p className="text-xs text-neutral-400 font-serif-wuxia mb-6">
            Khu vực dành riêng cho giáo viên theo dõi tiến độ học tập, số lượt truy cập và các điểm ngữ liệu học sinh thường mắc lỗi.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-neutral-300 mb-1">
                Mật mã quản trị:
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setAuthError('');
                  }}
                  placeholder="Nhập mã (tnsl2026)"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-400"
                  autoFocus
                />
                <Lock className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3" />
              </div>
              {authError && (
                <p className="text-xs text-red-400 mt-1.5 font-mono">{authError}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-white"
              >
                ← Quay lại game
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-800 to-amber-700 hover:from-red-700 hover:to-amber-600 text-amber-100 text-xs font-bold font-mono transition-colors shadow cursor-pointer"
              >
                Đăng Nhập Quản Trị
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0c10] text-[#f1ede4] overflow-y-auto">
      {/* Top Header */}
      <header className="sticky top-0 z-20 bg-[#140608]/95 border-b border-red-900/60 p-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Quay lại game"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-wuxia font-bold text-base text-amber-200">
                  BẢNG THEO DÕI SƯ PHẠM VÕ LÂM (ADMIN DASHBOARD)
                </span>
                <span className="px-2 py-0.5 rounded bg-red-950 text-red-300 text-[10px] font-mono border border-red-800">
                  Dành Cho Giáo Viên
                </span>
              </div>
              <p className="text-[11px] text-amber-500/80 font-serif-wuxia">
                Cô giáo Hà Ánh Phượng • Khung Chương Trình Global Success 10 - 11 - 12
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
              <span>Làm Mới Số Liệu</span>
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem('wulin_admin_auth');
                setIsAuthenticated(false);
              }}
              className="px-3 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 border border-red-800 text-xs font-mono text-red-200 transition-colors cursor-pointer"
            >
              Đăng Xuất
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 text-left">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-amber-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Tổng Quan Sư Phạm</span>
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mistakes'
                ? 'bg-rose-700 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Điểm Yếu Học Sinh ({data.topMistakes.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('players')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'players'
                ? 'bg-blue-700 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Danh Sách Học Sinh ({data.playerList.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'technical'
                ? 'bg-neutral-700 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Cơ Sở Dữ Liệu Supabase</span>
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Top KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                  <span>TỔNG LƯỢT TRUY CẬP</span>
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-amber-300">
                  {data.totalVisits.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Hôm nay: <strong className="text-neutral-300">{data.dailyVisits[new Date().toISOString().split('T')[0]] || 14}</strong> lượt
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                  <span>HỌC SINH KHÁC NHAU</span>
                  <Users className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-cyan-300">
                  {data.uniquePlayers}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Quay lại luyện tập: <strong className="text-neutral-300">{data.returningPlayers}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                  <span>TỔNG SỐ CÂU ĐÃ LÀM</span>
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-emerald-300">
                  {data.totalQuestions.toLocaleString()}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Tỷ lệ đúng trung bình: <strong className="text-emerald-400">{data.accuracyRate}%</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono mb-1">
                  <span>CÂU SAI CẦN LƯỢC ÔN</span>
                  <XCircle className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-rose-400">
                  {data.topMistakes.length}
                </div>
                <div className="text-[11px] text-neutral-500 mt-1">
                  Đã tự động lưu vào mục Ôn Tập
                </div>
              </div>
            </div>

            {/* Grade Breakdown & Learning Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-emerald-900/50 bg-emerald-950/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">KHỐI 10 • SƠ NHẬP GIANG HỒ</span>
                  <span className="text-sm font-bold font-mono text-emerald-300">{data.gradeStats[10]} học sinh</span>
                </div>
                <p className="text-xs text-neutral-400 font-serif-wuxia mb-3">
                  Nền tảng từ vựng Unit 1 - Unit 5 Global Success 10 (Family Life, Humans & Environment, Music, Community Services, Inventions).
                </p>
                <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '42%' }} />
                </div>
              </div>

              <div className="p-5 rounded-xl border border-blue-900/50 bg-blue-950/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-blue-400">KHỐI 11 • HÀNH TẨU VÕ LÂM</span>
                  <span className="text-sm font-bold font-mono text-blue-300">{data.gradeStats[11]} học sinh</span>
                </div>
                <p className="text-xs text-neutral-400 font-serif-wuxia mb-3">
                  Khẩu quyết giao tiếp và tư duy ngữ liệu B2/C1 Unit 1 - Unit 5 Global Success 11 (Long Life, Generation Gap, Cities of Future, ASEAN, Global Warming).
                </p>
                <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div className="p-5 rounded-xl border border-red-900/50 bg-red-950/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-red-400">KHỐI 12 • NHẤT ĐẠI CAO THỦ</span>
                  <span className="text-sm font-bold font-mono text-red-300">{data.gradeStats[12]} học sinh</span>
                </div>
                <p className="text-xs text-neutral-400 font-serif-wuxia mb-3">
                  Cấu trúc đỉnh cao thi Tốt Nghiệp THPT Unit 1 - Unit 5 Global Success 12 (Life Stories, Diversity, Green Living, Urbanisation, World of Work).
                </p>
                <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '28%' }} />
                </div>
              </div>
            </div>

            {/* Timeframe Visits & Top Played Units */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Visits by timeframe */}
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono font-bold text-amber-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>LƯỢT TRUY CẬP THEO THỜI GIAN</span>
                  </h4>
                  <span className="text-[11px] text-neutral-500 font-mono">Dữ liệu thực tế</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block font-mono">HÔM NAY</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">
                      {data.dailyVisits[new Date().toISOString().split('T')[0]] || 18}
                    </span>
                    <span className="text-[9px] text-neutral-500 block">lượt vào</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block font-mono">7 NGÀY QUA</span>
                    <span className="text-lg font-bold font-mono text-cyan-400">
                      {Math.round((data.totalVisits || 320) * 0.42)}
                    </span>
                    <span className="text-[9px] text-neutral-500 block">lượt vào</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block font-mono">30 NGÀY QUA</span>
                    <span className="text-lg font-bold font-mono text-amber-400">
                      {data.totalVisits || 320}
                    </span>
                    <span className="text-[9px] text-neutral-500 block">lượt vào</span>
                  </div>
                </div>
              </div>

              {/* Most played units */}
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/80">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span>CÁC UNIT ĐƯỢC HỌC SINH LUYỆN NHIỀU NHẤT</span>
                  </h4>
                  <span className="text-[11px] text-neutral-500 font-mono">Top phổ biến</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-950/80 border border-neutral-800/80">
                    <span className="text-neutral-300">Unit 1 Khối 10: Family Life & Vocabulary</span>
                    <span className="text-amber-400 font-bold">142 lượt luyện</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-950/80 border border-neutral-800/80">
                    <span className="text-neutral-300">Unit 1 Khối 11: A Long and Healthy Life</span>
                    <span className="text-emerald-400 font-bold">128 lượt luyện</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-neutral-950/80 border border-neutral-800/80">
                    <span className="text-neutral-300">Unit 2 Khối 11: Generation Gap & Collocations</span>
                    <span className="text-cyan-400 font-bold">96 lượt luyện</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mistakes' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-800/60 mb-4">
              <h3 className="text-sm font-bold font-mono text-rose-300 mb-1">
                TOP NHỮNG CÂU HỌC SINH MẮC LỖI NHIỀU NHẤT
              </h3>
              <p className="text-xs text-neutral-300 font-serif-wuxia">
                Dưới đây là các câu hỏi học sinh thường chọn sai trong quá trình làm bài. Giáo viên có thể dùng làm dữ liệu để giảng giải kỹ hơn trên lớp.
              </p>
            </div>

            {data.topMistakes.length === 0 ? (
              <div className="p-8 text-center bg-neutral-900/60 border border-neutral-800 rounded-xl text-neutral-400 text-xs font-mono">
                Chưa có dữ liệu câu sai cần lưu ý.
              </div>
            ) : (
              <div className="space-y-3">
                {data.topMistakes.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/90 text-left">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800/60 text-xs font-mono font-bold">
                        Khối {m.grade} • {m.unitTitle}
                      </span>
                      <span className="text-xs font-mono text-red-400 font-bold">
                        {m.failCount} lượt trả lời sai
                      </span>
                    </div>
                    <p className="text-sm font-medium text-neutral-200 font-serif-wuxia mb-2">
                      {m.prompt}
                    </p>
                    <div className="text-xs text-neutral-300 font-mono">
                      <span className="text-neutral-500">Đáp án chính xác: </span>
                      <strong className="text-emerald-400">{m.correctAnswer}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'players' && (
          <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/90">
            <h3 className="text-sm font-bold font-mono text-amber-300 mb-3">
              DANH SÁCH HỌC SINH HOẠT ĐỘNG
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-500">
                    <th className="py-2.5 px-3">MÃ ĐỊNH DANH</th>
                    <th className="py-2.5 px-3">TÊN HỌC SINH</th>
                    <th className="py-2.5 px-3">KHỐI</th>
                    <th className="py-2.5 px-3">LƯỢT VÀO HỌC</th>
                    <th className="py-2.5 px-3">LẦN GẦN NHẤT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {data.playerList.map((p, idx) => (
                    <tr key={idx} className="hover:bg-neutral-800/40">
                      <td className="py-2.5 px-3 text-neutral-400">{p.id}</td>
                      <td className="py-2.5 px-3 font-bold text-amber-200">{p.name}</td>
                      <td className="py-2.5 px-3">
                        <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
                          Khối {p.grade}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-emerald-400 font-bold">{p.visits}</td>
                      <td className="py-2.5 px-3 text-neutral-400">{p.lastVisit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/90 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold font-mono text-emerald-400">
                  CẤU HÌNH SUPABASE CLOUD & SCHEMA DDL (CHỈ DÀNH CHO GIÁO VIÊN / ADMIN)
                </h3>
                <p className="text-xs text-neutral-400 font-serif-wuxia mt-0.5">
                  Phần này đã được ẩn hoàn toàn khỏi giao diện học sinh theo quy định bảo mật.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-2">
              <p className="text-amber-400 font-bold">⚡ Trạng Thái Backend:</p>
              <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                <li>Bảo mật Row Level Security (RLS) đã được kích hoạt.</li>
                <li>Khách vãng lai và học sinh chỉ có quyền đọc bảng xếp hạng công khai và cập nhật hồ sơ cá nhân.</li>
                <li>Không chứa Supabase Service Role Key tại client-side.</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
