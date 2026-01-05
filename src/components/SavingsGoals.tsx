import { motion } from 'framer-motion';
import { Target, Plus, Gem, Sword, Castle, Ship } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Goal {
  id: string;
  name: string;
  icon: React.ReactNode;
  current: number;
  target: number;
  color: string;
}

const goals: Goal[] = [
  {
    id: '1',
    name: 'Enchanted Armor',
    icon: <Gem className="w-4 h-4" />,
    current: 750,
    target: 1000,
    color: 'hsl(var(--primary))',
  },
  {
    id: '2',
    name: 'Dragon Slayer Sword',
    icon: <Sword className="w-4 h-4" />,
    current: 2300,
    target: 5000,
    color: 'hsl(var(--coin-gold))',
  },
  {
    id: '3',
    name: 'Castle Expansion',
    icon: <Castle className="w-4 h-4" />,
    current: 15000,
    target: 50000,
    color: 'hsl(var(--coin-mithril))',
  },
  {
    id: '4',
    name: 'Merchant Ship',
    icon: <Ship className="w-4 h-4" />,
    current: 8500,
    target: 10000,
    color: 'hsl(var(--coin-electrum))',
  },
];

export const SavingsGoals = () => {
  return (
    <motion.div
      className="glass-card rounded-2xl p-6 border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-coin-gold/10">
            <Target className="w-5 h-5 text-coin-gold" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Savings Goals</h3>
            <p className="text-xs text-muted-foreground">Track your treasures</p>
          </div>
        </div>
        <motion.button
          className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          whileHover={{ scale: 1.05, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          
          return (
            <motion.div
              key={goal.id}
              className="p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${goal.color}20` }}
                >
                  <span style={{ color: goal.color }}>{goal.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{goal.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()} gold
                  </p>
                </div>
                <span 
                  className="text-sm font-bold"
                  style={{ color: goal.color }}
                >
                  {percentage}%
                </span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: goal.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
