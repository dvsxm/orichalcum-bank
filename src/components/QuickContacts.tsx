import { motion } from 'framer-motion';
import { Users, Plus, Crown, Wand2, Shield, Skull } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Contact {
  id: string;
  name: string;
  title: string;
  initials: string;
  icon: React.ReactNode;
  color: string;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'King Aldric',
    title: 'Royal Treasury',
    initials: 'KA',
    icon: <Crown className="w-3 h-3" />,
    color: 'hsl(var(--coin-gold))',
  },
  {
    id: '2',
    name: 'Merlin',
    title: 'Arcane Guild',
    initials: 'ME',
    icon: <Wand2 className="w-3 h-3" />,
    color: 'hsl(var(--primary))',
  },
  {
    id: '3',
    name: 'Sir Roland',
    title: 'Knight Order',
    initials: 'SR',
    icon: <Shield className="w-3 h-3" />,
    color: 'hsl(var(--coin-mithril))',
  },
  {
    id: '4',
    name: 'Grimjaw',
    title: 'Mercenary',
    initials: 'GR',
    icon: <Skull className="w-3 h-3" />,
    color: 'hsl(var(--coin-copper))',
  },
];

export const QuickContacts = () => {
  return (
    <motion.div
      className="glass-card rounded-2xl p-6 border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-coin-mithril/10">
            <Users className="w-5 h-5 text-coin-mithril" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Quick Transfer</h3>
            <p className="text-xs text-muted-foreground">Send to recent contacts</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {/* Add new contact button */}
        <motion.button
          className="flex-shrink-0 flex flex-col items-center gap-2"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-14 h-14 rounded-full bg-muted/50 border-2 border-dashed border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-xs text-muted-foreground">Add</span>
        </motion.button>

        {contacts.map((contact, index) => (
          <motion.button
            key={contact.id}
            className="flex-shrink-0 flex flex-col items-center gap-2 group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Avatar className="w-14 h-14 border-2 border-transparent group-hover:border-primary transition-colors">
                <AvatarFallback 
                  className="text-sm font-bold"
                  style={{ 
                    backgroundColor: `${contact.color}20`,
                    color: contact.color,
                  }}
                >
                  {contact.initials}
                </AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card border border-border"
                style={{ color: contact.color }}
                whileHover={{ rotate: 15 }}
              >
                {contact.icon}
              </motion.div>
            </div>
            <div className="text-center">
              <p className="text-xs font-medium text-foreground truncate max-w-[60px]">{contact.name}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
