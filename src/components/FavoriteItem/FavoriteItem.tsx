import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import CloseIconFavorite from '../../assets/svg/CloseIconFavorite';

import {IProductList} from '../../store/reducers/menu';
import {styles} from './styles';

interface Props {
  itemInfo: IProductList;
  removeItemFromFavorite: (item: IProductList) => void;
}

const FavoriteItem = ({itemInfo, removeItemFromFavorite}: Props) => {
  return (
    <TouchableOpacity style={styles.fovoriteIconWrapper}>
      <Image style={styles.fovoriteIconImage} source={{uri: itemInfo.img}} />
      <View style={styles.contextFavorite}>
        <Text style={styles.favoriteName}>{itemInfo.name}</Text>
        <Text
          style={styles.favoriteDescr}
          numberOfLines={1}
          ellipsizeMode="tail">
          {itemInfo.description}
        </Text>
        <Text style={styles.favoritePrice}>${itemInfo.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeItemFromFavorite(itemInfo)}>
        <CloseIconFavorite />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FavoriteItem;
