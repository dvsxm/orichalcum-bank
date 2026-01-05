import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, Activity, Zap } from 'lucide-react';

const stats = [
  {
    label: 'Weekly Income',
    value: '+42,580',
    unit: 'G',
    change: '+18.2%',
    isPositive: true,
    icon: TrendingUp,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    label: 'Transactions',
    value: '156',
    unit: '',
    change: '+12',
    isPositive: true,
    icon: Activity,
    color: 'text-coin-mithril',
    bgColor: 'bg-coin-mithril/10',
  },
  {
    label: 'Guild Rank',
    value: '#12',
    unit: '',
    change: '↑3',
    isPositive: true,
    icon: Zap,
    color: 'text-coin-gold',
    bgColor: 'bg-coin-gold/10',
  },
  {
    label: 'Vault Status',
    value: '98%',
    unit: '',
    change: 'Secured',
    isPositive: true,
    icon: Wallet,
    color: 'text-coin-adamantium',
    bgColor: 'bg-coin-adamantium/10',
  },
];

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.08, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="relative overflow-hidden rounded-xl bg-card/60 border border-border/40 p-4 backdrop-blur-sm group cursor-default"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
                {stat.unit && <span className="text-xs text-muted-foreground">{stat.unit}</span>}
              </div>
              <div className={`flex items-center gap-1 mt-1 ${stat.color}`}>
                {stat.isPositive ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                <span className="text-xs font-medium">{stat.change}</span>
              </div>
            </div>
            <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
