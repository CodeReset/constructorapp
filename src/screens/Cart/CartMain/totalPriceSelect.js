import {createSelector} from 'reselect';

const cart = (state) => state.cartReducer.cart;

export const totalPriceSelect = createSelector([cart], (cart) => {
  let totalCost = 0;

  cart.forEach((item) => {
    totalCost += item.price * item.count;
  });
  return totalCost;
});
