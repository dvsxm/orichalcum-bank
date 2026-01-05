import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PromoBanner = () => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-coin-gold/20 border border-primary/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-coin-gold/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      {/* Floating stars */}
      <motion.div
        className="absolute top-4 right-8 text-coin-gold"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Star className="w-4 h-4 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-8 right-20 text-primary"
        animate={{ 
          y: [0, 5, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      >
        <Star className="w-3 h-3 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-6 right-12 text-coin-mithril"
        animate={{ 
          y: [0, -3, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >
        <Zap className="w-4 h-4" />
      </motion.div>

      <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <motion.div
            className="p-3 rounded-2xl bg-primary/20 border border-primary/30"
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(var(--primary), 0.2)',
                '0 0 40px rgba(var(--primary), 0.4)',
                '0 0 20px rgba(var(--primary), 0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-primary" />
          </motion.div>
          <div>
            <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
              Dragon's Hoard Quest
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete 5 transactions this week and earn <span className="text-coin-gold font-semibold">500 bonus gold</span>!
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 group">
            Start Quest
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Button>
        </motion.div>
      </div>

      {/* Progress indicator */}
      <div className="relative px-6 md:px-8 pb-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Progress: 2/5 transactions</span>
          <span className="text-primary font-medium">40%</span>
        </div>
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-coin-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '40%' }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
