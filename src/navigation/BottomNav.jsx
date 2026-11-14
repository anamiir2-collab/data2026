import React from 'react';
import { Home, GraduationCap, FlaskConical, FolderKanban, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { usePrefs } from '../state/PrefsContext.jsx';

const items = [
  { to: '/', icon: Home, key: 'nav.home' },
  { to: '/academy', icon: GraduationCap, key: 'nav.academy' },
  { to: '/labs', icon: FlaskConical, key: 'nav.labs' },
  { to: '/projects', icon: FolderKanban, key: 'nav.projects' },
  { to: '/profile', icon: User, key: 'nav.profile' },
];

export default function BottomNav() {
  const { t } = usePrefs();
  return (
    <nav className="bottom-nav">
      {items.map((it) => (
        <NavLink key={it.to} to={it.to} end={it.to === '/'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <it.icon />
          <span>{t(it.key)}</span>
        </NavLink>
      ))}
    </nav>
  );
}
