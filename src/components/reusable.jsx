export const GrayTitle = ({ children, className = "" }) => (
  <h1 className={`text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl ${className}`}>
    {children}
  </h1>
);

export const GoldTitle = ({ children, className = "" }) => (
  <span className={`block bg-linear-to-br from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export const SectionLabel = ({ children, className = "" }) => (
  <p className={`text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground ${className}`}>
    {children}
  </p>
);


export const SectionHeading = ({gray ,gold}) => (
    <h2 className = "font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.025em]">
        <GrayTitle>{gray}</GrayTitle>
        <br/>
        <GoldTitle>{gold}</GoldTitle>
    </h2>
);


