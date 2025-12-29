import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';
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
      className="rounded-xl bg-card border border-border shadow-card p-6"
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Currency Converter
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1 block">From</label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="flex-1"
                min="0"
              />
              <Select value={fromCurrency} onValueChange={(v) => setFromCurrency(v as CurrencyType)}>
                <SelectTrigger className="w-40">
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
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwap}
            className="rounded-full"
          >
            <ArrowRightLeft className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="text-sm text-muted-foreground mb-1 block">To</label>
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 rounded-md bg-muted border border-border flex items-center">
                <span className="font-display font-semibold text-primary">
                  {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
              <Select value={toCurrency} onValueChange={(v) => setToCurrency(v as CurrencyType)}>
                <SelectTrigger className="w-40">
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
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          1 Copper = €1 | 1 Orichalcum = 100 Adamantium
        </p>
      </div>
    </motion.div>
  );
}
