import { motion } from 'framer-motion';
import { CoinIcon } from './CoinIcon';
import { CURRENCY_ORDER, CURRENCY_INFO, CURRENCY_RATES, CurrencyType } from '@/lib/currency';

export function ExchangeRates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="rounded-xl bg-card border border-border shadow-card overflow-hidden"
    >
      <div className="p-4 border-b border-border">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Exchange Rates
        </h3>
        <p className="text-sm text-muted-foreground">1 Copper = €1</p>
      </div>

      <div className="divide-y divide-border">
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.05 }}
      className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
    >
      <div className="flex items-center gap-3">
        <CoinIcon currency={currency} size="sm" />
        <span className="font-medium capitalize">{info.name}</span>
      </div>
      <div className="text-right">
        <p className="font-display font-semibold text-primary">
          {rate.toLocaleString()} C
        </p>
        <p className="text-xs text-muted-foreground">€{rate.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}
