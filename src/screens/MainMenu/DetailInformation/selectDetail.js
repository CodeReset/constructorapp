import {createSelector} from 'reselect';

const selectedItem = (state) => state.menuReducer.selectedProduct;
const cartArray = (state) => state.cartReducer.cart;

export const selectDetail = createSelector(
  [selectedItem, cartArray],
  (seleted, cart) => {
    let count =
      cart.find((cartItem) => cartItem?.productId === seleted.productId)
        ?.count || 0;
    return {
      ...seleted,
      count: count,
    };
  },
);
