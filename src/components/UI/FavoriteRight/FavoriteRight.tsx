import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FavoriteIcon from '../../../assets/svg/FavoriteIcon';
import {TO_FROM_FOVORITE} from '../../../store/actions/menuAction';
import {IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';
import {styles} from './styles';

interface Props {
  info: IProductList;
}

const FavoriteRight = ({info}: Props) => {
  const dispatch = useDispatch();
  const isFovorite = useSelector(
    (state: AppStore) => state.menuReducer.favoriteItems,
  );

  const addOrRemoveFromFavorite = () => {
    console.log(info.productId);
    dispatch({type: TO_FROM_FOVORITE, payload: info});
  };

  return (
    <TouchableOpacity
      style={styles.backArrowWrapper}
      onPress={addOrRemoveFromFavorite}>
      <FavoriteIcon
        fovoriteActive={isFovorite.some(
          (item: any) => item.productId === info.productId,
        )}
      />
    </TouchableOpacity>
  );
};

export default FavoriteRight;
