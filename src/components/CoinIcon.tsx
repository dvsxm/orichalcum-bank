import { motion } from 'framer-motion';
import { CurrencyType } from '@/lib/currency';
import { cn } from '@/lib/utils';

interface CoinIconProps {
  currency: CurrencyType;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
};

const colorClasses: Record<CurrencyType, string> = {
  copper: 'bg-coin-copper coin-glow-copper',
  silver: 'bg-coin-silver coin-glow-silver',
  gold: 'bg-coin-gold coin-glow-gold',
  platinum: 'bg-coin-platinum coin-glow-platinum',
  mithril: 'bg-coin-mithril coin-glow-mithril',
  adamantium: 'bg-coin-adamantium coin-glow-adamantium',
  orichalcum: 'bg-coin-orichalcum coin-glow-orichalcum',
};

const symbols: Record<CurrencyType, string> = {
  copper: 'C',
  silver: 'S',
  gold: 'G',
  platinum: 'P',
  mithril: 'M',
  adamantium: 'A',
  orichalcum: 'O',
};

export function CoinIcon({ currency, size = 'md', animate = false, className }: CoinIconProps) {
  if (animate) {
    return (
      <motion.div
        className={cn(
          'rounded-full flex items-center justify-center font-display font-bold',
          'border-2 border-foreground/20',
          sizeClasses[size],
          colorClasses[currency],
          className
        )}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
      >
        <span className="text-background/90 drop-shadow-sm">{symbols[currency]}</span>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-display font-bold',
        'border-2 border-foreground/20',
        sizeClasses[size],
        colorClasses[currency],
        className
      )}
    >
      <span className="text-background/90 drop-shadow-sm">{symbols[currency]}</span>
    </div>
  );
}
