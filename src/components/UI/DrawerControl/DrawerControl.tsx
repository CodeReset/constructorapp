import React from 'react';
import {TouchableOpacity} from 'react-native';

import DrawerControll from '../../../assets/svg/DrawerControll';

import navigationService from '../../../navigator/navigationService';

import {styles} from './styles';

const DrawerControl = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRigh}
      onPress={() => navigationService.openDrawer()}>
      <DrawerControll />
    </TouchableOpacity>
  );
};

export default DrawerControl;
