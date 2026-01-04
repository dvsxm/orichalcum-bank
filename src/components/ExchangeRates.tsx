import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CoinIcon } from './CoinIcon';
import { CURRENCY_ORDER, CURRENCY_INFO, CURRENCY_RATES, CurrencyType } from '@/lib/currency';

export function ExchangeRates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-2xl bg-card/80 border border-border/50 shadow-[0_8px_32px_hsl(0_0%_0%/0.3)] overflow-hidden backdrop-blur-sm"
    >
      <div className="p-4 border-b border-border/50">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Exchange Rates
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">1 Copper = €1</p>
      </div>

      <div className="divide-y divide-border/30">
        {CURRENCY_ORDER.map((currency, index) => (
          <RateRow key={currency} currency={currency} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

interface RateRowProps {
  currency: CurrencyType;
  index: number;
}

function RateRow({ currency, index }: RateRowProps) {
  const info = CURRENCY_INFO[currency];
  const rate = CURRENCY_RATES[currency];
  // Mock trend data
  const isUp = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.05 }}
      whileHover={{ backgroundColor: 'hsl(var(--muted) / 0.3)' }}
      className="flex items-center justify-between p-3.5 transition-colors cursor-default group"
    >
      <div className="flex items-center gap-3">
        <motion.div whileHover={{ scale: 1.1 }}>
          <CoinIcon currency={currency} size="sm" />
        </motion.div>
        <span className="font-medium capitalize text-sm group-hover:text-foreground transition-colors">{info.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <p className="font-display font-semibold text-primary text-sm tabular-nums">
            {rate.toLocaleString()} C
          </p>
          <p className="text-[10px] text-muted-foreground">€{rate.toLocaleString()}</p>
        </div>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isUp ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
          {isUp ? (
            <TrendingUp className="w-3 h-3 text-green-400" />
          ) : (
            <TrendingDown className="w-3 h-3 text-red-400" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
