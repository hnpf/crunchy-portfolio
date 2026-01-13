
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Camera, 
  User, 
  Search, 
  Settings, 
  Moon, 
  Sun,
  Github,
  MessageCircle
} from 'lucide-react';
import { Theme } from '../types';

interface SidebarProps {
  onToggleSettings: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSettings, theme, onToggleTheme }) => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/blog', icon: BookOpen, label: 'Opinions' },
    { to: '/lens', icon: Camera, label: 'Lens' },
    { to: '/info', icon: User, label: 'Info' },
    { to: '/search', icon: Search, label: 'Search' },
  ];

  return (
    <aside className="sidebar-border sticky top-0 left-0 flex flex-col h-screen bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl z-50 transition-all duration-300 sidebar">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-[var(--primary-color)] rounded-xl sketch-border flex items-center justify-center text-white shrink-0 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#fff]">
          <span className="font-bold text-xl hand-drawn">V</span>
        </div>
        <div className="hidden md:block">
          <h1 className="font-extrabold text-xl tracking-tighter">VIREX</h1>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">System / Dev</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              flex items-center gap-3 p-3 rounded-lg transition-all fluid-btn
              ${isActive 
                ? 'bg-[var(--primary-color)] text-white shadow-lg sketch-border -translate-y-0.5' 
                : 'hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}
            `}
          >
            <item.icon size={22} />
            <span className="hidden md:block font-bold">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 mt-auto space-y-2">
        <div className="hidden md:flex gap-2 mb-4 px-2">
           <a href="https://github.com/hnpf" target="_blank" className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all fluid-btn"><Github size={18} /></a>
           <a href="https://discord.gg/vixencommunity" target="_blank" className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all fluid-btn"><MessageCircle size={18} /></a>
        </div>

        <button 
          onClick={onToggleTheme}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all fluid-btn"
        >
          {theme === Theme.DARK ? <Sun size={22} className="text-amber-400" /> : <Moon size={22} className="text-indigo-500" />}
          <span className="hidden md:block font-bold">{theme === Theme.DARK ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <button 
          onClick={onToggleSettings}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all fluid-btn"
        >
          <Settings size={22} />
          <span className="hidden md:block font-bold">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
