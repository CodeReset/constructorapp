import React from 'react';
import {FlatList} from 'react-native';
import {IProductList} from '../../store/reducers/menu';
import CartItem from '../CartItem/CartItem';

interface Props {
  cartList: IProductList[];
  removeItem: (item: IProductList) => void;
  addItemFromCart: (item: IProductList) => void;
  removeFromCart: (item: IProductList) => void;
}

const CartList = ({
  cartList,
  removeItem,
  addItemFromCart,
  removeFromCart,
}: Props) => {
  return (
    <FlatList
      data={cartList}
      renderItem={({item}) => (
        <CartItem
          cartInfo={item}
          removeItem={removeItem}
          addItemFromCart={addItemFromCart}
          removeFromCart={removeFromCart}
        />
      )}
      keyExtractor={(item) => item.productId.toString()}
    />
  );
};

export default CartList;
