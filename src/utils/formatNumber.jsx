// format currency
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

// format number
const UNIT_FORMATTER = new Intl.NumberFormat({
  style: 'unit',
});

export function formatUnit(number) {
  return UNIT_FORMATTER.format(number);
}

// format name
export function formatName(name) {
  return name.replace('-', ' ').replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}
