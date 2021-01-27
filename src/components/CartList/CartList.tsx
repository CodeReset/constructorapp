import React from 'react';
import {FlatList} from 'react-native';
import {IProductList} from '../../store/reducers/menu';
import CartItem from '../CartItem/CartItem';

interface Props {
  cartList: IProductList[];
  removeItem: (item: IProductList) => void;
}

const CartList = ({cartList, removeItem}: Props) => {
  return (
    <FlatList
      data={cartList}
      renderItem={({item}) => (
        <CartItem cartInfo={item} removeItem={removeItem} />
      )}
      keyExtractor={(item) => item.productId.toString()}
    />
  );
};

export default CartList;
