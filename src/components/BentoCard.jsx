import React from 'react';

export const BentoCard = ({ icon, title, description, link, className = "" }) => {
  return (
    <div className={`relative bg-slate-900/40 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-8 h-full transition-all duration-300 overflow-hidden group ${className}`}>
      <span className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl mb-5 group-hover:scale-105 transition-transform duration-300">
        {icon}
      </span>

      <h3 className="font-serif text-xl tracking-tight mb-2 text-slate-100">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-6">{description}</p>
      
      <a 
        href={link} 
        className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
      >
        Learn More <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </div>
  );
};
