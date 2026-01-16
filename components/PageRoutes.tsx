import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteSettings } from '../types';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Lens from '../pages/Lens';
import Info from '../pages/Info';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

interface PageRoutesProps {
  settings: SiteSettings;
  initialSortedPhotos: Photo[]; 
}

const PageRoutes: React.FC<PageRoutesProps> = ({ 
  settings, initialSortedPhotos 
}) => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };
  const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.5 };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}
        initial="initial" animate="in" exit="out"
        variants={pageVariants} transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home accent={settings.accentColor} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route 
          path="/lens" element={<Lens initialSortedPhotos={initialSortedPhotos} />} />
          <Route path="/info" element={<Info />} />
          <Route path="/search" 
          element={<Search settings={settings} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" 
          element={<Navigate to="/404" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
export default PageRoutes;