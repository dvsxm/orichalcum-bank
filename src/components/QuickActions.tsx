import { motion } from 'framer-motion';
import { Send, Download, RefreshCw, History, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  { icon: Send, label: 'Send', description: 'Transfer coins', color: 'text-coin-gold' },
  { icon: Download, label: 'Receive', description: 'Get payment', color: 'text-coin-mithril' },
  { icon: RefreshCw, label: 'Exchange', description: 'Convert currency', color: 'text-coin-adamantium' },
  { icon: History, label: 'History', description: 'View all', color: 'text-coin-platinum' },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
    >
      {actions.map((action, index) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35 + index * 0.08, type: "spring", stiffness: 300 }}
        >
          <Button
            variant="outline"
            className="w-full h-auto py-5 flex flex-col items-center gap-3 bg-card/50 hover:bg-card border-border/50 hover:border-primary/30 transition-all group relative overflow-hidden"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500" />
              
              <div className={`w-12 h-12 rounded-xl bg-muted/80 flex items-center justify-center group-hover:bg-primary/10 transition-colors relative`}>
                <action.icon className={`w-5 h-5 ${action.color} group-hover:scale-110 transition-transform`} />
                <motion.div
                  className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30"
                  initial={false}
                  whileHover={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-center relative">
                <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </motion.button>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
