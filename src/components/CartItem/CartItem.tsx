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
}

const CartItem = ({cartInfo, removeItem}: Props) => {
  return (
    <TouchableOpacity style={styles.fovoriteIconWrapper}>
      <Image style={styles.fovoriteIconImage} source={{uri: cartInfo.img}} />
      <View style={styles.counterItem}>
        {/* Icon plus */}
        <TouchableOpacity>
          <PlusIconCart />
        </TouchableOpacity>
        <Text style={styles.counterItemText}>1</Text>
        <TouchableOpacity>
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
        <Text style={styles.favoritePrice}>${cartInfo.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeItem(cartInfo)}>
        <CloseIconFavorite />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CartItem;
