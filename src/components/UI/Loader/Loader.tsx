import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

import {styles} from './styles';

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="large" color={Theme[Config.theme].loaderColor} />
    </View>
  );
};

export default Loader;
