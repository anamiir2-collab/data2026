import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { WifiOff, RefreshCw } from 'lucide-react';
import BottomNav from './navigation/BottomNav.jsx';
import { ToastHost } from './components/ui.jsx';
import HomeScreen from './screens/Home.jsx';
import { AcademyScreen, LevelScreen, ModuleScreen, LessonScreen } from './screens/Academy.jsx';
import { LabsHub, ConversionLab, ExcelLab, SqlLab, CleaningLab } from './screens/Labs.jsx';
import { ProjectsScreen, ProjectDetail, ProfileScreen, AchievementsScreen, SettingsScreen, InstallGuideScreen, ReadinessScreen, QuizScreen } from './screens/Misc.jsx';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [offline, setOffline] = useState(!navigator.onLine);
  const [updateReady, setUpdateReady] = useState(false);

  useEffect(() => {
    const on = () => setOffline(false);
    const off = () => setOffline(true);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    const upd = () => setUpdateReady(true);
    window.addEventListener('dpa-update', upd);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
      window.removeEventListener('dpa-update', upd);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <ToastHost />
      {offline && (
        <div className="offline-banner">
          <WifiOff size={13} style={{ verticalAlign: '-2px', marginInlineEnd: 5 }} />
          {document.documentElement.getAttribute('lang') === 'ar' ? 'أنت غير متصل — الدروس المخزنة تبقى متاحة.' : 'You are offline — cached lessons remain available.'}
        </div>
      )}
      {updateReady && (
        <div className="offline-banner" style={{ background: 'var(--accent-soft)', color: 'var(--accent)', cursor: 'pointer' }}
          onClick={() => { navigator.serviceWorker && navigator.serviceWorker.getRegistration().then((r) => r && r.waiting && r.waiting.postMessage('SKIP_WAITING')); setTimeout(() => location.reload(), 400); }}>
          <RefreshCw size={13} style={{ verticalAlign: '-2px', marginInlineEnd: 5 }} />
          {document.documentElement.getAttribute('lang') === 'ar' ? 'يتوفر إصدار جديد — اضغط للتحديث' : 'A new version is available — tap to reload'}
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/academy" element={<AcademyScreen />} />
        <Route path="/academy/level/:levelId" element={<LevelScreen />} />
        <Route path="/academy/level/:levelId/module/:moduleId" element={<ModuleScreen />} />
        <Route path="/lesson/:lessonId" element={<LessonScreen />} />
        <Route path="/labs" element={<LabsHub />} />
        <Route path="/labs/conversion" element={<ConversionLab />} />
        <Route path="/labs/excel" element={<ExcelLab />} />
        <Route path="/labs/sql" element={<SqlLab />} />
        <Route path="/labs/cleaning" element={<CleaningLab />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/quiz/:quizId" element={<QuizScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/achievements" element={<AchievementsScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/install" element={<InstallGuideScreen />} />
        <Route path="/readiness" element={<ReadinessScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
      <BottomNav />
    </div>
  );
}
