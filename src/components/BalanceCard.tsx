import { motion } from 'framer-motion';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { CoinIcon } from './CoinIcon';
import { CurrencyBreakdown, CURRENCY_ORDER, CURRENCY_INFO, CurrencyType } from '@/lib/currency';
import { Button } from './ui/button';

interface BalanceCardProps {
  breakdown: CurrencyBreakdown;
  totalCoppers: number;
}

export function BalanceCard({ breakdown, totalCoppers }: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(true);
  const totalEuros = totalCoppers.toLocaleString();
  const hiddenBalance = '••••••••••';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 border border-border/50 p-6 md:p-8 shadow-[0_8px_32px_hsl(0_0%_0%/0.4)]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-50" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-muted-foreground text-sm uppercase tracking-widest">
              Total Balance
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? (
                <Eye className="w-3.5 h-3.5 text-muted-foreground" />
              ) : (
                <EyeOff className="w-3.5 h-3.5 text-muted-foreground" />
              )}
            </Button>
          </div>
          <motion.div 
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <TrendingUp className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs font-medium text-green-400">+12.5%</span>
          </motion.div>
        </div>

        <motion.div 
          className="flex items-baseline gap-2 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-glow text-primary">
            {showBalance ? totalEuros : hiddenBalance}
          </span>
          <span className="text-muted-foreground text-base md:text-lg">coppers (€)</span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {CURRENCY_ORDER.map((currency, index) => (
            <CurrencyAmount
              key={currency}
              currency={currency}
              amount={breakdown[currency]}
              delay={index * 0.08}
              showBalance={showBalance}
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
  showBalance: boolean;
}

function CurrencyAmount({ currency, amount, delay, showBalance }: CurrencyAmountProps) {
  const info = CURRENCY_INFO[currency];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/40 border border-border/40 backdrop-blur-sm hover:bg-muted/60 hover:border-border transition-all cursor-default"
    >
      <CoinIcon currency={currency} size="md" animate />
      <div className="text-center">
        <p className="font-display font-semibold text-foreground tabular-nums">
          {showBalance ? amount.toLocaleString() : '•••'}
        </p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{info.name}</p>
      </div>
    </motion.div>
  );
}
