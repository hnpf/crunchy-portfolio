
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Theme, SiteSettings } from './types';
import Sidebar from './components/Sidebar';
import SettingsMenu from './components/SettingsMenu';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Lens from './pages/Lens';
import Info from './pages/Info';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('site_settings');
    if (saved) return JSON.parse(saved);
    return {
      theme: Theme.DARK,
      accentColor: '#d1305c',
      radius: 12,
      animationType: 'spring',
      searchEngine: 'google',
      openSearchInNewTab: true
    };
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('site_settings', JSON.stringify(settings));
    
    // for Tailwind CDN classbased dark mode
    if (settings.theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    document.documentElement.style.setProperty('--primary-color', settings.accentColor);
    document.documentElement.style.setProperty('--global-radius', `${settings.radius}px`);
  }, [settings]);

  const toggleTheme = useCallback(() => {
    setSettings(prev => ({ ...prev, theme: prev.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK }));
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-all duration-500 overflow-hidden">
        {/* fixed now */}
        <div className="w-20 md:w-64 h-full shrink-0">
          <Sidebar 
            onToggleSettings={() => setIsSettingsOpen(true)} 
            theme={settings.theme} 
            onToggleTheme={toggleTheme} 
          />
        </div>

        {/* scrollable main content area */}
        <main className="flex-1 overflow-y-auto relative custom-scroll">
          <div className="max-w-6xl mx-auto p-6 md:p-12">
            <Routes>
              <Route path="/" element={<Home accent={settings.accentColor} />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Blog />} />
              <Route path="/lens" element={<Lens />} />
              <Route path="/info" element={<Info />} />
              <Route path="/search" element={<Search settings={settings} />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </div>
        </main>

        {/* settings menu overlay */}
        <SettingsMenu 
          isOpen={isSettingsOpen} 
          onClose={() => setIsSettingsOpen(false)} 
          settings={settings} 
          setSettings={setSettings} 
        />
      </div>
    </Router>
  );
};

export default App;
