import React, { useState, useEffect, 
  useCallback, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme, SiteSettings, Photo } from './types';
import Sidebar from './components/Sidebar';
import SettingsMenu from './components/SettingsMenu';
import PageRoutes from './components/PageRoutes';
import Lightbox from './components/Lightbox';
import { IMAGES } from './constants'; 
import { AnimatePresence } from 'framer-motion'; 

interface LightboxContextType {
  activePhotoIndex: number | null;
  sortedPhotos: Photo[];
  openLightbox: (index: number, photos: Photo[]) => void;
  closeLightbox: () => void;
  nextPhoto: () => void;
  prevPhoto: () => void;
}

export const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

const App: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const defaultSettings: SiteSettings = {
      theme: Theme.DARK, accentColor: '#d1305c',
      radius: 12, animationType: 'spring',
      searchEngine: 'google', openSearchInNewTab: true,
      availableSearchEngines: ['google', 'bing', 'brave', 'wikipedia']
    };
    const saved = localStorage.getItem('site_settings');
    if (saved) {
      const parsedSettings = JSON.parse(saved);
      return { ...defaultSettings, ...parsedSettings }; 
    }
    return defaultSettings;
  });

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const parseDate = (dateString: string): number => {
    const dateStr = dateString.toLowerCase();
    const [month, year] = dateStr.split(' ');
    const monthOrder: Record<string, number> = {
      'january': 1, 'february': 2, 'march': 3, 'april': 4, 'may': 5, 'june': 6,
      'july': 7, 'august': 8, 'september': 9, 'october': 10, 'november': 11, 'december': 12
    };
    const monthNum = monthOrder[month] || 0;
    const yearNum = parseInt(year, 10);
    return yearNum * 12 + monthNum;
  };

  const initialSortedPhotos = React.useMemo(() => {
    return [...IMAGES].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  const [lightboxPhotos, setLightboxPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    localStorage.setItem('site_settings', JSON.stringify(settings));
    if (settings.theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.style.setProperty('--primary-color', settings.accentColor);
    document.documentElement.style.setProperty('--global-radius', `${settings.radius}px`);
  }, [settings]);

  const openLightbox = useCallback((index: number, photos: Photo[]) => {
    setActivePhotoIndex(index);
    setLightboxPhotos(photos);
  }, []);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  const closeLightbox = useCallback(() => {
    setActivePhotoIndex(null);
    setLightboxPhotos([]);
  }, []);

  const toggleTheme = useCallback(() => {
    setSettings(prev => ({ ...prev, theme: prev.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK }));
  }, []);

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % lightboxPhotos.length);
  }, [activePhotoIndex, lightboxPhotos]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  }, [activePhotoIndex, lightboxPhotos]);

  const lightboxContextValue = React.useMemo(() => ({
    activePhotoIndex, sortedPhotos: lightboxPhotos,
    openLightbox, closeLightbox, nextPhoto, prevPhoto,
  }), [activePhotoIndex, lightboxPhotos, openLightbox, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <Router>
      <LightboxContext.Provider value={lightboxContextValue}>
  <div className="flex h-[calc(var(--vh,1vh)*100)] bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-all duration-500">
          <div className="w-20 md:w-64 h-full shrink-0">
            <Sidebar onToggleSettings={() => setIsSettingsOpen(true)} theme={settings.theme} onToggleTheme={toggleTheme} />
          </div>

          <main className="flex-1 overflow-y-auto relative custom-scroll">
            <div className="max-w-6xl mx-auto p-6 md:p-12">
              <PageRoutes settings={settings} initialSortedPhotos={initialSortedPhotos} />
            </div>
          </main>

          <AnimatePresence>
            {isSettingsOpen && (
              <SettingsMenu isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} settings={settings} setSettings={setSettings} />
            )}
          </AnimatePresence>
  </div>
        <Lightbox
          activePhoto={lightboxContextValue.activePhotoIndex}
          sortedPhotos={lightboxContextValue.sortedPhotos}
          onClose={lightboxContextValue.closeLightbox}
          onPrev={lightboxContextValue.prevPhoto}
          onNext={lightboxContextValue.nextPhoto}
        />
      </LightboxContext.Provider>
    </Router>
  );
};

export default App;