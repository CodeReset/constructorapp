import React from 'react';
import {View} from 'react-native';

import BackIcon from '../../../assets/svg/BackIcon';
import {styles} from './styles';

const BackArrow = () => {
  return (
    <View style={styles.backArrowWrapper}>
      <BackIcon />
    </View>
  );
};

export default BackArrow;
