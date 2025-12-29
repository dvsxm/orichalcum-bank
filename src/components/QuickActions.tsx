import { motion } from 'framer-motion';
import { Send, Download, RefreshCw, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  { icon: Send, label: 'Send', description: 'Transfer coins' },
  { icon: Download, label: 'Receive', description: 'Get payment' },
  { icon: RefreshCw, label: 'Exchange', description: 'Convert currency' },
  { icon: History, label: 'History', description: 'View all' },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3"
    >
      {actions.map((action, index) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <Button
            variant="outline"
            className="w-full h-auto py-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <action.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-foreground">{action.label}</p>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}
