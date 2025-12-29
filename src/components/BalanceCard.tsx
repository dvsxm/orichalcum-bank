import { motion } from 'framer-motion';
import { CoinIcon } from './CoinIcon';
import { CurrencyBreakdown, CURRENCY_ORDER, CURRENCY_INFO, CurrencyType } from '@/lib/currency';

interface BalanceCardProps {
  breakdown: CurrencyBreakdown;
  totalCoppers: number;
}

export function BalanceCard({ breakdown, totalCoppers }: BalanceCardProps) {
  const totalEuros = totalCoppers.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-card via-card to-muted/50 border border-border p-6 shadow-card"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10">
        <h2 className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
          Total Balance
        </h2>
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl md:text-5xl font-display font-bold text-glow text-primary">
            {totalEuros}
          </span>
          <span className="text-muted-foreground text-lg">coppers (€)</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {CURRENCY_ORDER.map((currency, index) => (
            <CurrencyAmount
              key={currency}
              currency={currency}
              amount={breakdown[currency]}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface CurrencyAmountProps {
  currency: CurrencyType;
  amount: number;
  delay: number;
}

function CurrencyAmount({ currency, amount, delay }: CurrencyAmountProps) {
  const info = CURRENCY_INFO[currency];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/50 border border-border/50"
    >
      <CoinIcon currency={currency} size="md" animate />
      <div className="text-center">
        <p className="font-display font-semibold text-foreground">
          {amount.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground capitalize">{info.name}</p>
      </div>
    </motion.div>
  );
}
