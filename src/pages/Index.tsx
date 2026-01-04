import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { BalanceCard } from '@/components/BalanceCard';
import { QuickActions } from '@/components/QuickActions';
import { TransactionList, Transaction } from '@/components/TransactionList';
import { CurrencyConverter } from '@/components/CurrencyConverter';
import { ExchangeRates } from '@/components/ExchangeRates';
import { breakdownFromCopper } from '@/lib/currency';
import { Sparkles, Shield, Crown } from 'lucide-react';

// Sample data - represents a wealthy adventurer's account
const SAMPLE_BALANCE_COPPERS = 15_432_567_890; // ~15.4 billion coppers

const sampleTransactions: Transaction[] = [
  {
    id: '1',
    type: 'incoming',
    description: 'Dragon Hoard Discovery',
    amount: 5,
    currency: 'gold',
    date: new Date('2024-12-28'),
    icon: 'gem',
  },
  {
    id: '2',
    type: 'outgoing',
    description: 'Enchanted Sword Purchase',
    amount: 250,
    currency: 'gold',
    date: new Date('2024-12-27'),
    icon: 'sword',
  },
  {
    id: '3',
    type: 'incoming',
    description: 'Quest Reward: Save the Kingdom',
    amount: 1,
    currency: 'platinum',
    date: new Date('2024-12-26'),
    icon: 'scroll',
  },
  {
    id: '4',
    type: 'outgoing',
    description: 'Mithril Shield Repair',
    amount: 500,
    currency: 'silver',
    date: new Date('2024-12-25'),
    icon: 'shield',
  },
  {
    id: '5',
    type: 'incoming',
    description: 'Merchant Guild Payment',
    amount: 10000,
    currency: 'gold',
    date: new Date('2024-12-24'),
    icon: 'gem',
  },
];

const Index = () => {
  const breakdown = breakdownFromCopper(SAMPLE_BALANCE_COPPERS);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coin-mithril/5 rounded-full blur-[120px]"
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Header />

      <main className="relative container mx-auto px-4 py-8 space-y-8">
        {/* Welcome section with enhanced styling */}
        <motion.div 
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Crown className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Elite Member</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-coin-mithril/10 border border-coin-mithril/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Shield className="w-3.5 h-3.5 text-coin-mithril" />
              <span className="text-xs font-medium text-coin-mithril">Protected</span>
            </motion.div>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Welcome back, <span className="text-glow text-primary inline-flex items-center gap-2">
              Adventurer
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.span>
            </span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Your treasury awaits your command. May your coffers overflow with fortune.
          </p>
        </motion.div>

        {/* Main balance card */}
        <BalanceCard breakdown={breakdown} totalCoppers={SAMPLE_BALANCE_COPPERS} />

        {/* Quick actions */}
        <QuickActions />

        {/* Two column layout for desktop */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Transactions - takes 2 columns */}
          <div className="lg:col-span-2">
            <TransactionList transactions={sampleTransactions} />
          </div>

          {/* Sidebar widgets */}
          <div className="space-y-6">
            <CurrencyConverter />
            <ExchangeRates />
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <motion.footer 
        className="border-t border-border mt-12 py-8 bg-card/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-display text-sm text-foreground">© 2024 Realm Treasury</p>
              <p className="text-xs text-muted-foreground mt-1">
                Secure banking for adventurers across all realms.
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
