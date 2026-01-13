
import React from 'react';
import { EXPERIENCE, TECH_CATEGORIES, SOCIALS } from '../constants';
import { Mail, Download, Briefcase, Award, Terminal } from 'lucide-react';

const Info: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto pb-40">
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-2 bg-[var(--primary-color)] rounded-full"></div>
           <span className="font-black uppercase tracking-[0.3em] text-[var(--primary-color)] text-xs">Welcome!</span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none">VIREX <br /><span className="hand-drawn text-[var(--primary-color)]">HNPF</span></h1>
        <p className="text-2xl md:text-3xl text-zinc-500 mb-12 leading-relaxed max-w-3xl font-medium">
          Independent software researcher. <br />
          <br />
          A bridge builder between high-level experience and low-level efficiency.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href={SOCIALS.email} className="flex items-center gap-3 px-10 py-5 bg-[var(--primary-color)] text-white font-black text-xl rounded-2xl shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#fff] fluid-btn">
            <Mail size={24} /> Send a Mail!
          </a>
          <button onClick={handlePrint} className="flex items-center gap-3 px-10 py-5 bg-white dark:bg-zinc-900 border-2 border-current font-black text-xl rounded-2xl fluid-btn print-hidden">
            <Download size={24} /> Get a (broken) PDF
          </button>
        </div>
      </section>
      <section className="mb-32">
        <h2 className="text-5xl font-black mb-16 hand-drawn tracking-tighter decoration-[var(--primary-color)]">Tech Stack and Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TECH_CATEGORIES.map((cat, i) => (
            <div key={i} className="p-10 bg-white dark:bg-zinc-900 sketch-card border-zinc-100 dark:border-zinc-800">
              <cat.icon className="text-[var(--primary-color)] mb-8" size={48} />
              <h3 className="font-black text-2xl mb-6">{cat.name}</h3>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item} className="text-zinc-500 font-bold text-lg flex items-center gap-3">
                    <Terminal size={14} className="text-[var(--primary-color)] opacity-40" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-32">
        <h2 className="text-5xl font-black mb-16 hand-drawn tracking-tighter">The Journey</h2>
        <div className="space-y-20">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-12 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-1 before:bg-gradient-to-b from-[var(--primary-color)] to-transparent">
              <div className="absolute left-[-8px] top-4 w-5 h-5 rounded-full bg-white dark:bg-zinc-900 border-4 border-[var(--primary-color)]" />
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-4xl font-black mb-2">{exp.role}</h3>
                  <p className="text-2xl font-black text-[var(--primary-color)] flex items-center gap-3">
                    <Briefcase size={24} /> {exp.company}
                  </p>
                </div>
                <span className="inline-block px-6 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-black uppercase tracking-widest text-zinc-500 border border-current/10">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-16 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-[60px] sketch-border rotate-[-1deg] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
          <Award size={200} />
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Pure logic <br /><span className="text-[var(--primary-color)]">Is expression.</span></h2>
        <p className="text-2xl font-medium leading-relaxed opacity-80 max-w-2xl">
          I believe code is as much about human expression as it is about data. < br/> <br/>
          The best tools aren't just efficient but rather personal, and honest.
        </p>
      </section>
    </div>
  );
};

export default Info;
