// Currency conversion rates (all values in coppers, 1 copper = 1 euro)
export const CURRENCY_RATES = {
  copper: 1,
  silver: 100,
  gold: 10_000,
  platinum: 1_000_000,
  mithril: 100_000_000,
  adamantium: 10_000_000_000,
  orichalcum: 1_000_000_000_000, // 100 adamantium
} as const;

export type CurrencyType = keyof typeof CURRENCY_RATES;

export const CURRENCY_ORDER: CurrencyType[] = [
  'orichalcum',
  'adamantium',
  'mithril',
  'platinum',
  'gold',
  'silver',
  'copper',
];

export const CURRENCY_INFO: Record<CurrencyType, { name: string; symbol: string; color: string }> = {
  copper: { name: 'Copper', symbol: 'C', color: 'coin-copper' },
  silver: { name: 'Silver', symbol: 'S', color: 'coin-silver' },
  gold: { name: 'Gold', symbol: 'G', color: 'coin-gold' },
  platinum: { name: 'Platinum', symbol: 'P', color: 'coin-platinum' },
  mithril: { name: 'Mithril', symbol: 'M', color: 'coin-mithril' },
  adamantium: { name: 'Adamantium', symbol: 'A', color: 'coin-adamantium' },
  orichalcum: { name: 'Orichalcum', symbol: 'O', color: 'coin-orichalcum' },
};

export interface CurrencyBreakdown {
  copper: number;
  silver: number;
  gold: number;
  platinum: number;
  mithril: number;
  adamantium: number;
  orichalcum: number;
}

export function convertToCopper(amount: number, currency: CurrencyType): number {
  return amount * CURRENCY_RATES[currency];
}

export function convertFromCopper(coppers: number, currency: CurrencyType): number {
  return coppers / CURRENCY_RATES[currency];
}

export function breakdownFromCopper(totalCoppers: number): CurrencyBreakdown {
  let remaining = totalCoppers;
  const breakdown: CurrencyBreakdown = {
    orichalcum: 0,
    adamantium: 0,
    mithril: 0,
    platinum: 0,
    gold: 0,
    silver: 0,
    copper: 0,
  };

  for (const currency of CURRENCY_ORDER) {
    const rate = CURRENCY_RATES[currency];
    breakdown[currency] = Math.floor(remaining / rate);
    remaining = remaining % rate;
  }

  return breakdown;
}

export function formatCurrency(amount: number, currency: CurrencyType): string {
  const info = CURRENCY_INFO[currency];
  return `${amount.toLocaleString()} ${info.symbol}`;
}

export function formatFullCurrency(breakdown: CurrencyBreakdown): string {
  const parts: string[] = [];
  for (const currency of CURRENCY_ORDER) {
    if (breakdown[currency] > 0) {
      parts.push(formatCurrency(breakdown[currency], currency));
    }
  }
  return parts.length > 0 ? parts.join(' ') : '0 C';
}
