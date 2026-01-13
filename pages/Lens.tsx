
import React, { useState, useMemo } from 'react';
import { IMAGES } from '../constants';
import { Photo } from '../types';
import { Calendar, Tag, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
// parsing stuff here, mostly pasted from last update. i really dont care
const parseDate = (dateString: string): number => {
  const dateStr = dateString.toLowerCase();
  const [month, year] = dateStr.split(' ');

  const monthOrder: Record<string, number> = {
    'january': 1, 'february': 2, 'march': 3, 'april': 4,
    'may': 5, 'june': 6, 'july': 7, 'august': 8,
    'september': 9, 'october': 10, 'november': 11, 'december': 12
  };

  const monthNum = monthOrder[month] || 0;
  const yearNum = parseInt(year, 10);

  return yearNum * 12 + monthNum;
};

const Lens: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const sortedPhotos = useMemo(() => {
    return [...IMAGES].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  const handleNext = () => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto + 1) % sortedPhotos.length);
  };

  const handlePrev = () => {
    if (activePhoto === null) return;
    setActivePhoto((activePhoto - 1 + sortedPhotos.length) % sortedPhotos.length);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-16">
        <h1 className="text-6xl font-black tracking-tighter mb-4 hand-drawn">The Lens</h1>
        <p className="text-xl text-zinc-500 max-w-xl">Buffers and raw exports. Mostly just things I didn't want to forget.</p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {sortedPhotos.map((photo, index) => (
          <div 
            key={photo.src}
            onClick={() => setActivePhoto(index)}
            className="group relative overflow-hidden bg-zinc-200 dark:bg-zinc-800 rounded-2xl cursor-pointer hover:shadow-2xl transition-all"
          >
            <img 
              src={photo.src} 
              alt={photo.title}
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 text-[var(--primary-color)] font-black text-[10px] uppercase mb-2">
                <Calendar size={12} /> {photo.date}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{photo.title}</h3>
              <div className="flex flex-wrap gap-2">
                {photo.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/20 rounded-full text-white backdrop-blur-md">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* lightbox */}
      {activePhoto !== null && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300">
          <button onClick={() => setActivePhoto(null)} className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50">
            <X size={32} />
          </button>
          
          <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50">
            <ChevronLeft size={48} />
          </button>

          <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50">
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center mb-8">
            <img 
              src={sortedPhotos[activePhoto].src} 
              alt={sortedPhotos[activePhoto].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          <div className="max-w-3xl text-center text-white px-6">
            <div className="flex items-center justify-center gap-4 text-zinc-400 text-xs font-black uppercase tracking-widest mb-4">
              <span className="flex items-center gap-1"><Calendar size={14} /> {sortedPhotos[activePhoto].date}</span>
              <span className="flex items-center gap-1"><Tag size={14} /> {sortedPhotos[activePhoto].tags.join(', ')}</span>
            </div>
            <h2 className="text-3xl font-black mb-4">{sortedPhotos[activePhoto].title}</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">{sortedPhotos[activePhoto].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lens;
