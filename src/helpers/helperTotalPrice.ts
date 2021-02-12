export const helperTotalPrice = (cart: any) => {
  let totalPrice = 0;

  cart.forEach((item: any) => {
    totalPrice += item.price * item.count;
  });
  return totalPrice;
};
