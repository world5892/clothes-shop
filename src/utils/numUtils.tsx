export const normalizePrice = (price: number) => {
  const strPrice = price.toString();

  if (!strPrice.includes('.')) {
    return strPrice;
  }

  return strPrice.replace('.', ',');
};

export const calcReducedPrice = (price: number, discount: number) =>
  Number((price - price * (discount / 100)).toFixed(2));
