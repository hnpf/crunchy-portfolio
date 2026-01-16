import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Camera, User, Search, Settings, Moon, Sun, Github, MessageCircle } from 'lucide-react';
import { Theme } from '../types';
import Button from './Button';

interface SidebarProps {
  onToggleSettings: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSettings, theme, onToggleTheme }) => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' }, { to: '/blog', icon: BookOpen, label: 'Opinions' },
    { to: '/lens', icon: Camera, label: 'Lens' },
    { to: '/info', icon: User, label: 'Info' }, { to: '/search', icon: Search, label: 'Search' },
  ];

  return (
    <aside className={`sidebar-border sticky top-0 left-0 flex flex-col h-[calc(var(--vh,1vh)*100)] bg-white/80 dark:bg-zinc-900/80 z-50 transition-all duration-300 sidebar overflow-y-auto`}>
      <div className="py-6 px-4 flex flex-col items-center md:flex-row md:justify-start md:items-center md:gap-3">
        <motion.div whileTap={{ scale: 0.9, rotateY: 180 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-11 h-11 bg-[var(--primary-color)] rounded-xl flex items-center justify-center text-white shrink-0 cursor-pointer mx-auto md:mx-0">
          <span className="font-bold text-2xl hand-drawn leading-none tracking-tighter translate-y-px">V</span>
        </motion.div>
        <div className="hidden md:block mt-3 md:mt-0">
          <h1 className="font-extrabold text-xl tracking-tighter">VIREX</h1>
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">System / Dev</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          return (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition-all fluid-btn ${isActive ? 'bg-[var(--primary-color)] text-white shadow-lg sketch-border -translate-y-0.5' : 'hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>
            <item.icon size={22} />
            <span className="hidden md:block font-bold">{item.label}</span>
          </NavLink>
        )})}
      </nav>

      <div className="p-4 mt-auto space-y-2">
        <div className="hidden md:flex gap-2 mb-4 px-2">
           <a href="https://github.com/hnpf" target="_blank" className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all fluid-btn">
            <Github size={18} /></a>
           <a href="https://discord.gg/vixencommunity" target="_blank" className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all fluid-btn">
            <MessageCircle size={18} /></a>
        </div>

        <Button onClick={onToggleTheme} variant="text"
          className="w-full flex items-center justify-start gap-3 p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
          {theme === Theme.DARK ? <Sun size={22} className="text-amber-400" /> : <Moon size={22} className="text-indigo-500" />}
          <span className="hidden md:block font-bold">{theme === Theme.DARK ? 'Light Mode' : 'Dark Mode'}</span>
        </Button>

        <Button onClick={onToggleSettings} variant="text" className="w-full flex items-center justify-start gap-3 p-3 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
          <Settings size={22} /><span className="hidden md:block font-bold">Settings</span>
        </Button>
      </div>
    </aside>
  );
};
export default Sidebar;