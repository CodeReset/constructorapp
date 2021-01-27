import React from 'react';
import {TouchableOpacity} from 'react-native';

import FavoriteIcon from '../../../assets/svg/FavoriteIcon';
import {styles} from './styles';

const FavoriteRight = () => {
  return (
    <TouchableOpacity style={styles.backArrowWrapper}>
      <FavoriteIcon />
    </TouchableOpacity>
  );
};

export default FavoriteRight;
