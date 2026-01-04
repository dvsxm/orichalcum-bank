import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Sparkles } from 'lucide-react';
import { CoinIcon } from './CoinIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  CurrencyType,
  CURRENCY_ORDER,
  CURRENCY_INFO,
  convertToCopper,
  convertFromCopper,
} from '@/lib/currency';

export function CurrencyConverter() {
  const [fromAmount, setFromAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<CurrencyType>('gold');
  const [toCurrency, setToCurrency] = useState<CurrencyType>('copper');

  const numericAmount = parseFloat(fromAmount) || 0;
  const inCoppers = convertToCopper(numericAmount, fromCurrency);
  const convertedAmount = convertFromCopper(inCoppers, toCurrency);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="rounded-2xl bg-card/80 border border-border/50 shadow-[0_8px_32px_hsl(0_0%_0%/0.3)] p-5 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-lg font-semibold text-foreground">
          Currency Converter
        </h3>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <Sparkles className="w-4 h-4 text-primary/60" />
        </motion.div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">From</label>
          <div className="flex gap-2">
            <Input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-muted/50 border-border/50 focus:border-primary/50"
              min="0"
            />
            <Select value={fromCurrency} onValueChange={(v) => setFromCurrency(v as CurrencyType)}>
              <SelectTrigger className="w-36 bg-muted/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCY_ORDER.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    <div className="flex items-center gap-2">
                      <CoinIcon currency={currency} size="sm" />
                      <span className="capitalize">{CURRENCY_INFO[currency].name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwap}
              className="rounded-full bg-muted/50 border-border/50 hover:bg-primary/10 hover:border-primary/30"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider">To</label>
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 rounded-md bg-muted/30 border border-border/30 flex items-center">
              <motion.span 
                className="font-display font-semibold text-primary text-lg"
                key={convertedAmount}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </motion.span>
            </div>
            <Select value={toCurrency} onValueChange={(v) => setToCurrency(v as CurrencyType)}>
              <SelectTrigger className="w-36 bg-muted/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CURRENCY_ORDER.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    <div className="flex items-center gap-2">
                      <CoinIcon currency={currency} size="sm" />
                      <span className="capitalize">{CURRENCY_INFO[currency].name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-2 border-t border-border/30">
          <p className="text-[10px] text-muted-foreground text-center uppercase tracking-wider">
            1 Copper = €1 • 1 Orichalcum = 100 Adamantium
          </p>
        </div>
      </div>
    </motion.div>
  );
}
