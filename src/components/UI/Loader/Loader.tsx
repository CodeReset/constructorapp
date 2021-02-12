import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {styles} from './styles';

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="large" color="#FD4035" />
    </View>
  );
};

export default Loader;
