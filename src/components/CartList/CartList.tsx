import React from 'react';
import {FlatList} from 'react-native';
import {IProductList} from '../../store/reducers/menu';
import CartItem from '../CartItem/CartItem';

interface Props {
  cartList: IProductList[];
  removeItem: (item: IProductList) => void;
  addItemFromCart: (item: IProductList) => void;
  removeFromCart: (item: IProductList) => void;
  goToDetailInfoFromCart: (item: IProductList) => void;
}

const CartList = ({
  cartList,
  removeItem,
  addItemFromCart,
  removeFromCart,
  goToDetailInfoFromCart,
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
          goToDetailInfoFromCart={goToDetailInfoFromCart}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CartList;
