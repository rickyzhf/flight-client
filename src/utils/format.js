export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}

export function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}
