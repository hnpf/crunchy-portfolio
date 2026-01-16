import React from 'react';
import { EXPERIENCE, TECH_CATEGORIES, SOCIALS } from '../constants';
import Button from '../components/Button';
import { Mail, Download, Briefcase, Award, Terminal } from 'lucide-react';

// Organized placement of the print handler
const handlePrint = () => { window.print(); };

const Info: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 max-w-4xl mx-auto pb-40">
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-8 print-hidden">
           <span className="font-extrabold uppercase tracking-[0.3em] text-[var(--primary-color)] text-sm">Welcome!</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-none">VIREX <br />
        <span className="hand-drawn text-[var(--primary-color)]">HNPF</span></h1>
        <p className="text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 mb-12 leading-relaxed max-w-3xl">
          Independent software researcher, innovator, and problem-solver. <br /><br />
          A bridge builder between high-level experience and low-level efficiency.
        </p>
          <div className="flex flex-wrap gap-6 print-hidden">
            <a href={SOCIALS.email}><Button variant="outlined"><Mail size={20} /> Send an Email!</Button></a>
<Button variant="outlined" onClick={handlePrint}>
              <Download size={20} /> Print this page
            </Button>
          </div>
      </section>

      <section className="mb-32">
        <h2 className="text-5xl font-black mb-16 hand-drawn tracking-tighter">Tech Stack and Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TECH_CATEGORIES.map((cat, i) => (
            <div key={i} className="p-10 bg-white dark:bg-zinc-900 sketch-card rounded-[30px] flex flex-col items-center text-center">
              <cat.icon className="text-[var(--primary-color)] mb-8 opacity-90" size={56} />
              <h3 className="font-black text-2xl mb-6">{cat.name}</h3>
              <ul className="space-y-4">
                {cat.items.map(item => <li key={item} className="text-zinc-600 dark:text-zinc-300 font-medium text-lg flex items-center gap-3">
                    <Terminal size={16} className="text-[var(--primary-color)] opacity-60" /> {item}
                  </li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-32">
        <h2 className="text-5xl font-black mb-16 hand-drawn tracking-tighter">The Journey</h2>
        <div className="space-y-20">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-12 border-l-2 border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-black mb-1">{exp.role}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{exp.company}</p>
              <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md text-xs font-semibold">
                {exp.period}</span>
              <p className="text-zinc-700 text-lg leading-relaxed max-w-2xl">{exp.description}</p>
            </div>))}
        </div>
      </section>

      <section className="p-16 bg-zinc-900 text-white rounded-[60px] sketch-border shadow-2xl relative overflow-hidden group print-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000 text-[var(--primary-color)]">
          <Award size={100} /></div>
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter max-w-full sm:max-w-2xl">Pure logic <br /><span className="text-white">Is expression.</span></h2>
        <p className="text-xl font-medium leading-relaxed opacity-80 max-w-full sm:max-w-2xl">
          I believe code is as much about human expression as it is about data. <br /><br />
          The best tools aren't just efficient but rather personal, and honest.</p>
      </section>
    </div>
  );
};
export default Info;