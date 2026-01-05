import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, Bell, User, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoinIcon } from './CoinIcon';
import { MobileNav } from './MobileNav';

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 flex items-center justify-center shadow-[0_0_20px_hsl(43_74%_49%/0.4)]">
                <Coins className="w-5 h-5 text-primary-foreground" />
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CoinIcon
                  currency="gold"
                  size="sm"
                  className="scale-75 shadow-lg"
                />
              </motion.div>
            </motion.div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground tracking-wide flex items-center gap-1">
                Realm Treasury
              </h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Fantasy Banking</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {['Dashboard', 'Accounts', 'Exchange', 'Guild'].map((item, i) => (
              <motion.button
                key={item}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  i === 0 ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {/* Search button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Search className="w-5 h-5" />
              </Button>
            </motion.div>
            
            {/* Notifications with count badge */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <motion.span 
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-destructive rounded-full flex items-center justify-center text-[10px] font-bold text-destructive-foreground"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, delay: 0.5 }}
                >
                  3
                </motion.span>
              </Button>
            </motion.div>
            
            {/* User avatar */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold">
                  A
                </div>
              </Button>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setMobileNavOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
