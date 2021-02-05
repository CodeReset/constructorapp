import {
  ADD_TO_CART_MAIN,
  REMOVE_FROM_CART_MAIN,
  REMOVE_ALL_FROM_CART,
} from '../../actions/cartAdder';
import {IProductList} from '../menu';

const initialState = {
  cart: [],
};

export const cartReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item: IProductList) => item.productId !== action.payload.productId,
        ),
      };

    case ADD_TO_CART_MAIN:
      let isFind = false;
      let newCart = state.cart.map((item: IProductList) => {
        if (item.productId === action.payload.productId) {
          item.count++;
          isFind = true;
        }
        return item;
      });
      if (!isFind) {
        action.payload.count = 1;
        newCart = [action.payload, ...state.cart];
      }
      return {
        ...state,
        cart: newCart,
      };

    case REMOVE_FROM_CART_MAIN:
      let newCart2 = state.cart.map((item: IProductList) => {
        if (item.productId === action.payload.productId) {
          if (item.count > 0) {
            item.count--;
          }
        }
        return item;
      });
      newCart2 = newCart2.filter((item: IProductList) => item.count > 0);
      return {
        ...state,
        cart: newCart2,
      };
    default:
      return state;
  }
};
