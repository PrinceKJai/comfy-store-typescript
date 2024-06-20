//my approach for conevrsion
// export const formatPrice = (price: string) => {
//     return `$${parseInt(price)/100}`;
// }

export const formatAsDollars = (price: string | number): string => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number(price) / 100);
    return dollarsAmount;
  };