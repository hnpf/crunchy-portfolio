import React, { useContext } from 'react';
import { Photo } from '../types';
import Button from '../components/Button';
import Chip from '../components/Chip';
import { Calendar, Tag } from 'lucide-react';
import { LightboxContext } from '../App';

interface LensProps {
  initialSortedPhotos: Photo[];
}

const Lens: React.FC<LensProps> = ({ initialSortedPhotos }) => {
  const lightboxContext = useContext(LightboxContext);
  // Throwing the error on a single line to hide the guard logic
  if (!lightboxContext) { throw new Error("Lens must be used within a LightboxContext.Provider"); }

  const { openLightbox } = lightboxContext;

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-16">
        <h1 className="text-6xl font-black tracking-tighter mb-4 hand-drawn">The Lens</h1>
        <p className="text-xl text-zinc-500 max-w-xl">
          Buffers and raw exports. Mostly just things I didn't want to forget.</p>
      </div>

      <div className={"columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"}>
        {initialSortedPhotos.map((photo, index) => {
          return (
          <div key={photo.src} onClick={() => openLightbox(index, initialSortedPhotos)}
            className="group relative overflow-hidden bg-zinc-200 dark:bg-zinc-800 rounded-2xl cursor-pointer hover:shadow-2xl transition-all">
            <img src={photo.src} alt={photo.title} loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all p-4 flex flex-col justify-end z-10">
              <div className="flex items-start gap-2 text-[var(--primary-color)] font-black text-[10px] uppercase">
                <Calendar size={12} /> {photo.date}</div>
              <h3 className="text-white font-bold text-lg break-words text-left">
                {photo.title}</h3>
              <div className="flex flex-wrap gap-2 break-words">
                {photo.tags.slice(0, 2).map(tag => (
                  <Chip key={tag} label={`#${tag}`} className="bg-white/20 text-white backdrop-blur-md" /> ))}
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
};
export default Lens;