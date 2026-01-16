import React, { useEffect } from 'react';
import { Calendar, Tag, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Photo } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface LightboxProps { activePhoto: number | null; sortedPhotos: Photo[]; onClose: () => void; onPrev: () => void; onNext: () => void; }

const Lightbox: React.FC<LightboxProps> = ({ activePhoto, sortedPhotos, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowLeft') onPrev(); if (e.key === 'ArrowRight') onNext(); };
    if (activePhoto !== null) { window.addEventListener('keydown', handleKeyDown); document.body.style.overflow = 'hidden'; }
    return () => { window.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = 'unset'; };
  }, [activePhoto, onPrev, onNext, onClose]);

  if (activePhoto === null) return null;
  const photo = sortedPhotos[activePhoto];

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        className="fixed inset-0 z-[100] flex flex-col lg:grid lg:grid-cols-4 bg-black/98 backdrop-blur-3xl overflow-hidden cursor-pointer">
        
        <div className="absolute top-0 left-0 right-0 p-3 md:p-6 flex justify-between items-center z-[110] pointer-events-none">
          <div className="bg-zinc-900/80 backdrop-blur-xl px-2.5 py-1 rounded-md text-white text-[8px] font-black uppercase tracking-widest border border-white/10">
            {activePhoto + 1} / {sortedPhotos.length}
          </div>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} 
            className="pointer-events-auto group bg-white/5 hover:bg-white text-white hover:text-black rounded-full p-2 transition-all">
            <X size={16} />
          </button>
        </div>

        <div className="relative lg:col-span-3 flex items-center justify-center p-2 lg:p-4 min-h-0 flex-1 lg:flex-auto">
          <div onClick={(e) => e.stopPropagation()} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[110] bg-zinc-900/50 backdrop-blur-md p-1.5 rounded-xl border border-white/5 hidden lg:flex cursor-default">
            <button onClick={onPrev} className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all"><ChevronLeft size={24} /></button>
            <div className="w-px h-6 bg-white/10" />
            <button onClick={onNext} className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all"><ChevronRight size={24} /></button>
          </div>

          <motion.div key={activePhoto} onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 1.1, x: -50 }}
            transition={{ type: "spring", stiffness: 350, damping: 35 }}
            drag="x" dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => { if (info.offset.x > 80) onPrev(); else if (info.offset.x < -80) onNext(); else if (Math.abs(info.offset.y) > 120) onClose(); }}
            className="relative z-10 cursor-grab active:cursor-grabbing touch-none flex items-center justify-center w-full h-full">
            <img src={photo.src} alt={photo.title} className="max-w-full max-h-[45vh] md:max-h-[55vh] lg:max-h-[80vh] object-contain rounded-sm shadow-2xl pointer-events-none" />
          </motion.div>
        </div>

        <motion.div onClick={(e) => e.stopPropagation()} initial={{ y: '100%', lg: { x: '100%', y: 0 } }} animate={{ y: 0, lg: { x: 0 } }}
          className="flex flex-col bg-zinc-900 lg:rounded-l-[32px] p-5 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/5 text-center items-center lg:justify-center shadow-[-30px_0_60px_rgba(0,0,0,0.4)] cursor-default">
          
          <div className="max-w-sm w-full space-y-3 lg:space-y-8">
            <div className="flex flex-col items-center">
              <span className="text-[var(--primary-color)] text-[8px] font-black uppercase tracking-[0.4em] mb-1 opacity-70">
                {photo.date}
              </span>
              <h2 className="text-white font-black leading-tight tracking-tighter uppercase italic text-balance mb-2" 
                  style={{ fontSize: 'clamp(1.25rem, 5vh, 3.5rem)' }}>
                {photo.title}
              </h2>
            </div>

            <p className="text-zinc-400 text-xs md:text-base leading-relaxed font-medium max-w-[240px] mx-auto line-clamp-2 lg:line-clamp-none opacity-80">
              {photo.description}
            </p>

            <div className="flex gap-2 w-full pt-2">
              <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="lg:hidden flex-1 bg-white/5 text-white py-2.5 rounded-lg flex justify-center items-center border border-white/5 active:bg-white/10"><ChevronLeft size={18} /></button>
              
              <button onClick={() => window.open(photo.src, '_blank')} className="flex-[2] w-full lg:flex-none py-2.5 bg-white/5 lg:bg-transparent border border-zinc-800 text-zinc-500 hover:text-white rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                <Maximize2 size={12} /> Original
              </button>

              <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="lg:hidden flex-1 bg-white/5 text-white py-2.5 rounded-lg flex justify-center items-center border border-white/5 active:bg-white/10"><ChevronRight size={18} /></button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; export default Lightbox;