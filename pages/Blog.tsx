import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { OPINIONS } from '../constants';
import { Opinion } from '../types';
import { Calendar, Clock, ArrowLeft, Share2, MessageSquare, Copy, Check } from 'lucide-react';

const Blog: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const selectedPost = slug ? OPINIONS.find((p) => p.link === slug) : null;

  const handleShare = () => {
    if (!selectedPost) return;
    const shareUrl = `${window.location.origin}/blog/${selectedPost.link}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500">
        <button 
          onClick={() => navigate('/blog')}
          className="mb-12 flex items-center gap-2 font-black text-sm uppercase tracking-widest text-zinc-500 hover:text-[var(--primary-color)] transition-all fluid-btn"
        >
          <ArrowLeft size={20} /> Discard / Return
        </button>
        
        <div className="relative">
          <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary-color)] via-zinc-200 dark:via-zinc-800 to-transparent hidden lg:block"></div>
          
          <header className="mb-16">
            <div className="flex flex-wrap items-center gap-4 text-xs font-black text-[var(--primary-color)] uppercase tracking-widest mb-6">
              <span className="bg-[var(--primary-color)] text-white px-4 py-1 rounded-full">{selectedPost.category}</span>
              <div className="flex items-center gap-1.5 text-zinc-500"><Calendar size={14} /> {selectedPost.date}</div>
              <div className="flex items-center gap-1.5 text-zinc-500"><Clock size={14} /> {selectedPost.readTime}</div>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">{selectedPost.title}</h1>
            <div className="w-24 h-2 bg-[var(--primary-color)] rounded-full"></div>
          </header>

          <article className="prose prose-zinc dark:prose-invert max-w-none text-xl leading-relaxed space-y-8">
            {selectedPost.content.split('\n').map((line, i) => {
              const trimmed = line.trim();
              if (trimmed.startsWith('# ')) return <h1 key={i} className="text-5xl font-black mt-16 mb-8 hand-drawn underline decoration-[var(--primary-color)]/30">{trimmed.replace('# ', '')}</h1>;
              if (trimmed.startsWith('## ')) return <h2 key={i} className="text-4xl font-bold mt-12 mb-6">{trimmed.replace('## ', '')}</h2>;
              if (trimmed.startsWith('* ')) return <li key={i} className="ml-8 list-none flex gap-4"><div className="w-2 h-2 mt-2.5 shrink-0 bg-[var(--primary-color)] rounded-full"></div> <span>{trimmed.replace('* ', '')}</span></li>;
              if (trimmed.startsWith('> ')) return <blockquote key={i} className="relative py-10 px-12 bg-zinc-100 dark:bg-zinc-900 rounded-[40px] border-2 border-[var(--primary-color)] italic text-3xl my-16 shadow-[8px_8px_0px_0px_var(--primary-color)]">"{trimmed.replace('> ', '')}"</blockquote>;
              if (trimmed === '') return <div key={i} className="h-4" />;
              return <p key={i} className="text-zinc-700 dark:text-zinc-300">{line}</p>;
            })}
          </article>

          <div className="mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-sm rounded-2xl fluid-btn"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Share2 size={20} />}
                {copied ? 'Copied Link' : 'Broadcast / Share'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-700">
      <div className="mb-20">
        <h1 className="text-7xl font-black tracking-tighter mb-6 hand-drawn">Opinions</h1>
        <p className="text-2xl text-zinc-500 max-w-2xl leading-relaxed">The modern web is built to be deleted.. <br />This is what I choose to keep.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {OPINIONS.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.link}`}
            className="group cursor-pointer p-10 bg-white dark:bg-zinc-900 sketch-card hover:translate-y-[-10px] transition-all flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
               <span className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[var(--primary-color)] border border-current/10">
                {post.category}
              </span>
              <span className="text-xs text-zinc-400 font-bold">{post.date}</span>
            </div>
            
            <h3 className="text-3xl font-black mb-6 group-hover:text-[var(--primary-color)] transition-colors tracking-tight">{post.title}</h3>
            <p className="text-zinc-500 text-lg line-clamp-3 mb-10 leading-relaxed">{post.snippet}</p>
            
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-50 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-black uppercase tracking-widest">
                <Clock size={14} /> {post.readTime}
              </div>
              <span className="text-sm font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-5 transition-all text-[var(--primary-color)]">
                Decrypt <ArrowLeft className="rotate-180" size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;