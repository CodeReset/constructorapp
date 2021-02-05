import React from 'react';
import {FlatList} from 'react-native';

import {IProductList} from '../../store/reducers/menu';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

interface Props {
  favorited: IProductList[];
  removeItemFromFavorite: (item: IProductList) => void;
}

const FovoriteList = ({favorited, removeItemFromFavorite}: Props) => {
  return (
    <FlatList
      data={favorited}
      renderItem={({item}) => (
        <FavoriteItem
          itemInfo={item}
          removeItemFromFavorite={removeItemFromFavorite}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FovoriteList;
