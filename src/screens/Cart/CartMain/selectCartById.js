import {createSelector} from 'reselect';

const cart = (state) => state.cartReducer.cart;
const menuProducts = (state) => state.menuReducer.products;

export const selectCartById = createSelector(
  [menuProducts, cart],
  (menu, cart) => {
    console.log('12321332132132132131232131232');
    return cart.map((item) => {
      console.log('1111111111111', item);
      return {
        ...menu.find((product) => product.id === item.id),
        count: item.count,
      };
    });
  },
);
