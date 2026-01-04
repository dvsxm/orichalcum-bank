import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowUpRight, Scroll, Sword, Shield, Gem, MoreHorizontal } from 'lucide-react';
import { CoinIcon } from './CoinIcon';
import { CurrencyType, formatCurrency } from '@/lib/currency';
import { Button } from './ui/button';

export interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  description: string;
  amount: number;
  currency: CurrencyType;
  date: Date;
  icon: 'scroll' | 'sword' | 'shield' | 'gem';
}

interface TransactionListProps {
  transactions: Transaction[];
}

const iconMap = {
  scroll: Scroll,
  sword: Sword,
  shield: Shield,
  gem: Gem,
};

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl bg-card/80 border border-border/50 shadow-[0_8px_32px_hsl(0_0%_0%/0.3)] overflow-hidden backdrop-blur-sm"
    >
      <div className="p-5 border-b border-border/50 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
            Recent Transactions
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">Your latest activities</p>
        </div>
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-primary">
          View All
        </Button>
      </div>

      <div className="divide-y divide-border/30">
        {transactions.map((transaction, index) => (
          <TransactionItem key={transaction.id} transaction={transaction} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

interface TransactionItemProps {
  transaction: Transaction;
  index: number;
}

function TransactionItem({ transaction, index }: TransactionItemProps) {
  const Icon = iconMap[transaction.icon];
  const isIncoming = transaction.type === 'incoming';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
      whileHover={{ backgroundColor: 'hsl(var(--muted) / 0.3)' }}
      className="flex items-center justify-between p-4 transition-colors group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <motion.div 
          className="w-11 h-11 rounded-xl bg-muted/60 flex items-center justify-center group-hover:bg-muted transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </motion.div>
        <div>
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{transaction.description}</p>
          <p className="text-xs text-muted-foreground">
            {transaction.date.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <motion.p
            className={`font-display font-semibold tabular-nums ${
              isIncoming ? 'text-green-400' : 'text-red-400'
            }`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {isIncoming ? '+' : '-'}
            {formatCurrency(transaction.amount, transaction.currency)}
          </motion.p>
        </div>
        <CoinIcon currency={transaction.currency} size="sm" />
        <motion.div
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            isIncoming ? 'bg-green-500/15' : 'bg-red-500/15'
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {isIncoming ? (
            <ArrowDownLeft className="w-4 h-4 text-green-400" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-red-400" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
