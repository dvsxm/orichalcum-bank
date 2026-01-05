import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Wallet, RefreshCw, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { CoinIcon } from './CoinIcon';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Wallet, label: 'Accounts', active: false },
  { icon: RefreshCw, label: 'Exchange', active: false },
  { icon: Users, label: 'Guild', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: HelpCircle, label: 'Help', active: false },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-3">
                <CoinIcon currency="gold" size="md" animate />
                <span className="font-display font-semibold text-foreground">Menu</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    item.active
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* User Section */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold">
                  A
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Adventurer</p>
                  <p className="text-xs text-muted-foreground">Elite Member</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium text-sm">Sign Out</span>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
