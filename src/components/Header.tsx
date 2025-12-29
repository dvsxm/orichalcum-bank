import { motion } from 'framer-motion';
import { Coins, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoinIcon } from './CoinIcon';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow">
              <Coins className="w-5 h-5 text-primary-foreground" />
            </div>
            <CoinIcon
              currency="gold"
              size="sm"
              className="absolute -bottom-1 -right-1 scale-75"
            />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground tracking-wide">
              Realm Treasury
            </h1>
            <p className="text-xs text-muted-foreground">Fantasy Banking</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
