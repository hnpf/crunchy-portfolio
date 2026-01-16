import React from 'react';
import { PROJECTS, SOCIALS } from '../constants';
import { ArrowRight, Code, Zap, Monitor, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chip from '../components/Chip';

const Home: React.FC<{ accent: string }> = ({ 
  accent 
}) => {
  return (
    <div className={"animate-in fade-in duration-700 slide-in-from-bottom-4"}>
      <header className="mb-12 md:mb-24">
        <div className="relative inline-block mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight leading-none mb-4">
            High <br />
            <span className="text-zinc-400 dark:text-zinc-600">Specs,</span> <br />
            <span className="hand-drawn text-[var(--primary-color)] relative inline-block group">
              Low Standards. :)<div className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--primary-color)]/20 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </span>
          </h1>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mt-8 font-medium">
          Rejecting the sanitization of the modern web. Building high-performance, high-intent systems for users who ACTUALLY want to own their tools.</p>
        
        <div className="mt-12 flex flex-wrap gap-6">
          <Link to="/info" className="px-6 py-3 md:px-10 md:py-5 bg-[var(--primary-color)] text-white font-black text-lg rounded-2xl shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#fff] fluid-btn">Open Info?</Link>
          <a href={SOCIALS.github} target="_blank" 
          className="px-6 py-3 md:px-10 md:py-5 bg-white dark:bg-zinc-900 border-2 border-current font-black text-lg rounded-2xl flex items-center gap-3 fluid-btn">
            <Github size={24} /> GitHub/hnpf</a>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24">
        <div className="p-10 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800">
          <div className="w-16 h-16 bg-[var(--primary-color)]/10 rounded-2xl flex items-center justify-center mb-6">
            <Monitor className="text-[var(--primary-color)]" size={32} /></div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">A design, For you.</h3>
          <p className="text-zinc-500 text-lg leading-relaxed">Fluid math meets artistic erraticism. Breaking the sterile flat grid to find the human heart inside the machine.</p>
        </div>
        <div className="p-10 bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800">
          <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="text-amber-500" size={32} />
          </div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">Fast. Fast. Fast.</h3>
          <p className="text-zinc-500 text-lg leading-relaxed">Optimized React framework with 60fps motion. A crunchy look powered by fast and responsive logic.</p>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-black hand-drawn tracking-tighter">Active Protocols...</h2>
          <Link to="/search" className="p-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-all fluid-btn"><ArrowRight size={32} /></Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => {
            const isAlt = idx % 2 !== 0;
            return (
            <div key={project.id} 
              className={`group p-8 bg-white dark:bg-zinc-900 flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5 ${isAlt ? 'md:translate-y-12' : ''}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 md:h-72 mb-8 overflow-hidden rounded-3xl border-2 border-zinc-100 dark:border-zinc-800">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex gap-2">
                     {project.tags.map(tag => <Chip key={tag} label={tag} className="bg-white text-black" />)}
                   </div>
                </div>
              </div>
              <h4 className="text-3xl font-black mb-4 group-hover:text-[var(--primary-color)] transition-colors">{project.title}</h4>
              <p className="text-zinc-500 text-lg mb-8 leading-relaxed flex-grow">{project.description}</p>
              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <a href={project.link} target="_blank" className="flex items-center gap-3 font-black text-sm uppercase tracking-widest hover:text-[var(--primary-color)] transition-all fluid-btn">
                  <Code size={20} /> Inspect Element</a>
                <a href={project.link} target="_blank" className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition-colors fluid-btn">
                  <ArrowRight size={20} /></a>
              </div>
            </div>
          )})}
        </div>
      </section>

      <footer className="mt-20 md:mt-40 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-24 text-center">
         <div className="mb-8 flex justify-center">
           <div className="w-16 h-1 h-1 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
         </div>
         <p className="hand-drawn text-3xl mb-12 text-zinc-400">Handcrafted logic by Virex.</p>
         <div className="flex justify-center gap-12 text-zinc-500 font-black uppercase tracking-widest text-sm">
            <a href={SOCIALS.email} className="hover:text-[var(--primary-color)] transition-colors">Relay / Email</a>
            <a href={SOCIALS.discord} className="hover:text-indigo-400 transition-colors">Community / Discord</a>
            <a href={SOCIALS.github} className="hover:text-zinc-900 dark:hover:text-white transition-colors">Archive / Github</a>
         </div>
      </footer>
    </div>
  );
}; export default Home;