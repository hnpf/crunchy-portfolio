import React, { useState, 
  useEffect, useRef, useCallback, useMemo } from 'react';
import { SiteSettings } from '../types';
import { Search as SearchIcon, Globe, Zap, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { LOCAL_SEARCH_INDEX } from '../constants';

// IMPORTANT: in order to use fuzzy search, you need to install fuse.js
import Fuse from 'fuse.js';

interface SearchProps {
  settings: SiteSettings;
}

const Search: React.FC<SearchProps> = ({ settings }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const fuse = useMemo(() => {
    const options = {
      keys: ['title', 'content'],
      threshold: 0.3, // (0 is exact, 1 is very loose)
      includeScore: true,
    };
    return new Fuse(LOCAL_SEARCH_INDEX, options);
  }, []);

  const [isSearching, setIsSearching] = useState(false);

  const handleExternalSearch = useCallback(() => {
    const urls: Record<string, string> = {
      google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
      bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      brave: `https://search.brave.com/search?q=${encodeURIComponent(query)}`
    };

    const targetUrl = urls[settings.searchEngine] || urls.google;
    window.open(targetUrl, settings.openSearchInNewTab ? '_blank' : '_self');
  }, [query, settings.searchEngine, settings.openSearchInNewTab]);

  const [answer, setAnswer] = useState<string | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleDeepSearch = useCallback(async () => {
    setIsSearching(true);
    setAnswer(null);
    try {
      if (settings.searchEngine === 'wikipedia') {
        const wikipediaApiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&format=json&origin=*`;
        const response = await fetch(wikipediaApiUrl);
        const data = await response.json();
        if (data && data.length > 3 && data[1].length > 0) {
          const title = data[1][0];
          const description = data[2][0];
          const link = data[3][0];
          setAnswer(`${title}: ${description} [${link}]`);
        }
      } 
    } finally {
      setIsSearching(false);
    }
  }, [query, settings.searchEngine]);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length > 2) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const result = fuse.search(trimmed);
        if (result.length > 0) {
          setAnswer(result[0].item.content);
        } else {
          setAnswer(null);
        }
        setIsSearching(false);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setAnswer(null);
      setIsSearching(false);
    }
  }, [query, fuse]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (settings.searchEngine === 'wikipedia') {
      handleDeepSearch();
    } else {
      handleExternalSearch();
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 min-h-[80vh] flex flex-col items-center justify-center max-w-3xl mx-auto py-20 px-4">
      <div className="text-center mb-16 group">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-500">
          <Sparkles size={12} /> Neural network
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 hand-drawn">Engine</h1>
        <br /> <br /> <br />
        <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Site index / Instant feedback</p>
      </div>

      <div className="w-full relative group">
        <form onSubmit={handleSearch} className="relative z-10">
          <div className="absolute sm:left-8 left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[var(--primary-color)] transition-colors">
            <SearchIcon size={32} />
          </div>
          <input 
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where to?"
            className="w-full sm:pl-20 sm:pr-32 pl-16 pr-28 py-8 bg-white dark:bg-zinc-900 sm:text-0xl text-0xl font-black rounded-[40px] sketch-border focus:ring-8 focus:ring-[var(--primary-color)]/10 transition-all outline-none border-4 border-transparent focus:border-[var(--primary-color)] shadow-2xl"
          />
          <Button 
            type="submit"
            className="absolute sm:right-6 right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--primary-color)] text-white rounded-3xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-xl"
          >
            <Zap size={28} />
          </Button>
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
              <Button onClick={handleSearch} variant="text" className="flex items-center gap-2 font-black text-sm uppercase tracking-widest text-zinc-400 hover:text-[var(--primary-color)] transition-colors">
                Deep Search External <ArrowRight size={16} />
              </Button>
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