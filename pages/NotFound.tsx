
import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    // what a mess.. temporary i swear
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-in zoom-in duration-500">
              <Ghost size={120} className="text-zinc-300 dark:text-zinc-700 animate-bounce" />
      <br /> <br /> <br /> 
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black opacity-20">404</div>
      <br /> <br /> <br /> <br />        

      </div>
      
      <h1 className="text-6xl font-black mb-4 hand-drawn tracking-tighter">How'd we end up here?</h1>
      <p className="text-xl text-zinc-500 max-w-md mb-12">
        You came across a dead end. This page doesn't exist, was deleted, or never intended to be found.
      </p>
      
      <Link to="/" className="flex items-center gap-2 px-10 py-5 bg-[var(--primary-color)] text-white font-black text-xl rounded-[40px] sketch-border hover:scale-105 transition-transform">
        <Home size={24} /> Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
