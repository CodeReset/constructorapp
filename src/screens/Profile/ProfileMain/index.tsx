import React from 'react';
import {ScrollView, FlatList, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import FovoriteList from '../../../components/FovoriteList/FovoriteList';

import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {TO_FROM_FOVORITE} from '../../../store/actions/menuAction';
import {IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';

import {styles} from './style';

export const ProfileMain = () => {
  const dispatch = useDispatch();

  const favoriteListSelect = useSelector(
    (state: AppStore) => state.menuReducer.favoriteItems,
  );

  const removeItemFromFavorite = (item: IProductList) => {
    dispatch({type: TO_FROM_FOVORITE, payload: item});
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.scrollContainer}>
        {!!favoriteListSelect.length ? (
          <FovoriteList
            favorited={favoriteListSelect}
            removeItemFromFavorite={removeItemFromFavorite}
          />
        ) : (
          <Text style={styles.emptyTextControl}>
            У вас пока нет избранных продуктов
          </Text>
        )}
      </View>
    </View>
  );
};
