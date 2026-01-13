
import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, Globe, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { SiteSettings } from '../types';

interface SearchProps {
  settings: SiteSettings;
}

const Search: React.FC<SearchProps> = ({ settings }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length > 2) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        setIsSearching(false);
        if (trimmed.includes('who is virex') || trimmed.includes('who are you')) {
          setAnswer("VIREX (HNPF) is an independent software researcher and full-stack developer known for building 'Crunchy Material' systems and expressive web architectures.");
        } else if (trimmed.includes('md3') || trimmed.includes('material design')) {
          setAnswer("Material Design 3 is Google's latest design system. It introduces 'Material You' which focuses on personalization through dynamic color and expressive shapes.");
        } else if (trimmed.includes('rust') || trimmed.includes('programming')) {
          setAnswer("Rust is a systems programming language focused on safety, speed, and concurrency. It's the core of most high-performance Virex protocols.");
        } else if (trimmed.includes('photography') || trimmed.includes('lens')) {
          setAnswer("The 'Lens' module contains atmospheric captures of mundane reality. All assets are stored locally in the system vault.");
        } else {
          setAnswer(null);
        }
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setAnswer(null);
      setIsSearching(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const urls: Record<string, string> = {
      google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
      bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      brave: `https://search.brave.com/search?q=${encodeURIComponent(query)}`
    };

    const targetUrl = urls[settings.searchEngine] || urls.google;
    window.open(targetUrl, settings.openSearchInNewTab ? '_blank' : '_self');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 min-h-[80vh] flex flex-col items-center justify-center max-w-3xl mx-auto py-20 px-4">
      <div className="text-center mb-16 group">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-500">
           <Sparkles size={12} /> Neural network
        </div>
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4 hand-drawn scale-110">Engine</h1>
        <br /> <br /> <br />
        <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Site index / Instant feedback</p>
      </div>

      <div className="w-full relative group">
        <form onSubmit={handleSearch} className="relative z-10">
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[var(--primary-color)] transition-colors">
            <SearchIcon size={32} />
          </div>
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Right away!"
            className="w-full pl-20 pr-32 py-8 bg-white dark:bg-zinc-900 text-3xl font-black rounded-[40px] sketch-border focus:ring-8 focus:ring-[var(--primary-color)]/10 transition-all outline-none border-4 border-transparent focus:border-[var(--primary-color)] shadow-2xl"
          />
          <button 
            type="submit"
            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--primary-color)] text-white rounded-3xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl fluid-btn"
          >
            <Zap size={28} />
          </button>
        </form>

        <div className="absolute inset-0 bg-[var(--primary-color)]/5 blur-3xl rounded-[40px] -z-10 group-focus-within:bg-[var(--primary-color)]/10 transition-all duration-700"></div>
      </div>

      <div className="mt-12 w-full min-h-[160px]">
        {isSearching && (
          <div className="flex flex-col items-center gap-0 animate-pulse">
            <div className="flex gap-0">
              <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-3 h-3 bg-[var(--primary-color)] rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
            <span className="font-black uppercase text-[10px] tracking-[0.5em] text-zinc-400">Eating cookies...</span>
          </div>
        )}

        {!isSearching && answer && (
          <div className="p-12 bg-white dark:bg-zinc-900 rounded-[50px] sketch-border border-[var(--primary-color)] animate-in zoom-in slide-in-from-top-4 duration-500 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <Globe size={120} />
             </div>
             <div className="flex items-center gap-3 text-[var(--primary-color)] font-black text-xs uppercase mb-6 tracking-[0.3em]">
               <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
               On-site Result
             </div>
             <p className="text-3xl font-black leading-tight tracking-tight mb-8">{answer}</p>
             <button onClick={handleSearch} className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-zinc-400 hover:text-[var(--primary-color)] transition-colors">
               Deep Search External <ArrowRight size={16} />
             </button>
          </div>
        )}

        {!isSearching && query.length > 2 && !answer && (
          <div className="text-center animate-in fade-in duration-500">
            <p className="text-zinc-400 hand-drawn text-2xl mb-2">No records found. Maybe it was never meant to be..</p>
            <p className="text-sm font-black uppercase tracking-widest text-zinc-500">Press ENTER for {settings.searchEngine} protocol</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
