import {createSelector} from 'reselect';

const cart = (state) => state.cartReducer.cart;
const menuProducts = (state) => state.menuReducer.products;

export const selectCartById = createSelector(
  [menuProducts, cart],
  (menu, cart) => {
    return cart.map((item) => {
      return {
        ...menu.find((product) => product.id === item.id),
        count: item.count,
      };
    });
  },
);
