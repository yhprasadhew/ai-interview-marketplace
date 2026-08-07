import React, { Children } from 'react'

export const BentoCard = ({icon, title, description, link, className = ""}) => {
  return (

    <div className={`relative bg-[#f0f11] border border-white/10 hover:border-amber 20 rounded-2xl p-9 h-full transition duration-300 overflow-hidden ${className} `}
    >
        
    <span className=
    "w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400 flex items-center justify-center texl-xl mb-5</div>">

    {icon}
    </span>

    <h3 className ="font-serif text-xl tracking-tight mb-2">{title}</h3>

    <p className = "text-sm text-stone-400 leading-relaxed">{description}</p>
    {Children}
    <a href={link}>Learn More</a>
    </div>
  )
}

