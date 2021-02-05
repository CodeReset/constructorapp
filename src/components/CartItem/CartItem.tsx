import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import CloseIconFavorite from '../../assets/svg/CloseIconFavorite';
import MinusIconCart from '../../assets/svg/MinusIconCart';
import PlusIconCart from '../../assets/svg/PlusIconCart';
import {IProductList} from '../../store/reducers/menu';

import {styles} from './styles';

interface Props {
  cartInfo: IProductList;
  removeItem: (item: IProductList) => void;
  addItemFromCart: (item: IProductList) => void;
  removeFromCart: (item: IProductList) => void;
  goToDetailInfoFromCart: (item: IProductList) => void;
}

const CartItem = ({
  cartInfo,
  removeItem,
  addItemFromCart,
  removeFromCart,
  goToDetailInfoFromCart,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.fovoriteIconWrapper}
      onPress={() => goToDetailInfoFromCart(cartInfo)}>
      <Image style={styles.fovoriteIconImage} source={{uri: cartInfo.img}} />
      <View style={styles.counterItem}>
        {/* Icon plus */}
        <TouchableOpacity onPress={() => addItemFromCart(cartInfo)}>
          <PlusIconCart />
        </TouchableOpacity>
        <Text style={styles.counterItemText}>{cartInfo.count}</Text>
        <TouchableOpacity onPress={() => removeItem(cartInfo)}>
          <MinusIconCart />
        </TouchableOpacity>
        {/* Icon minus */}
      </View>
      <View style={styles.contextFavorite}>
        <Text style={styles.favoriteName}>{cartInfo.name}</Text>
        <Text
          style={styles.favoriteDescr}
          numberOfLines={1}
          ellipsizeMode="tail">
          {cartInfo.description}
        </Text>
        <Text style={styles.favoritePrice}>KZT {cartInfo.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(cartInfo)}>
        <CloseIconFavorite />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CartItem;
