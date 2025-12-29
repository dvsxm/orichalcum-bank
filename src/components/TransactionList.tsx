import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowUpRight, Scroll, Sword, Shield, Gem } from 'lucide-react';
import { CoinIcon } from './CoinIcon';
import { CurrencyType, formatCurrency } from '@/lib/currency';

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
      className="rounded-xl bg-card border border-border shadow-card overflow-hidden"
    >
      <div className="p-4 border-b border-border">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Recent Transactions
        </h3>
      </div>

      <div className="divide-y divide-border">
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
      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
      className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <div>
          <p className="font-medium text-foreground">{transaction.description}</p>
          <p className="text-sm text-muted-foreground">
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
          <p
            className={`font-display font-semibold ${
              isIncoming ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {isIncoming ? '+' : '-'}
            {formatCurrency(transaction.amount, transaction.currency)}
          </p>
        </div>
        <CoinIcon currency={transaction.currency} size="sm" />
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            isIncoming ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}
        >
          {isIncoming ? (
            <ArrowDownLeft className="w-4 h-4 text-green-400" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-red-400" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
