const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const UNIT_FORMATTER = new Intl.NumberFormat({
  style: 'unit',
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

export function formatUnit(number) {
  return UNIT_FORMATTER.format(number);
}
