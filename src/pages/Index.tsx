import { Header } from '@/components/Header';
import { BalanceCard } from '@/components/BalanceCard';
import { QuickActions } from '@/components/QuickActions';
import { TransactionList, Transaction } from '@/components/TransactionList';
import { CurrencyConverter } from '@/components/CurrencyConverter';
import { ExchangeRates } from '@/components/ExchangeRates';
import { breakdownFromCopper } from '@/lib/currency';

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
    <div className="min-h-screen bg-background">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative container mx-auto px-4 py-8 space-y-8">
        {/* Welcome message */}
        <div className="mb-2">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Welcome back, <span className="text-glow text-primary">Adventurer</span>
          </h2>
          <p className="text-muted-foreground mt-1">
            Your treasury awaits your command
          </p>
        </div>

        {/* Main balance card */}
        <BalanceCard breakdown={breakdown} totalCoppers={SAMPLE_BALANCE_COPPERS} />

        {/* Quick actions */}
        <QuickActions />

        {/* Two column layout for desktop */}
        <div className="grid lg:grid-cols-3 gap-8">
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

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Realm Treasury. All rights reserved.</p>
          <p className="mt-1">Secure banking for adventurers across all realms.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
