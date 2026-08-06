import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { cn } from '@/lib/utils';

export const StarsBackgroundDemo = () => {
  return (
    <StarsBackground
      starColor="#FFF"
      className={cn(
        'absolute inset-0 flex items-center justify-center rounded-xl pointer-events-none select-none -z-10',
        'bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]',
      )}
    />
  );
};