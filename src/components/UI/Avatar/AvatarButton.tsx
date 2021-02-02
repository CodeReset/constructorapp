import React from 'react';
import {TouchableOpacity} from 'react-native';
import AvatarIcon from '../../../assets/svg/AvatarIcon';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';

import {styles} from './styles';

const AvatarButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRigh}
      onPress={() => navigationService.navigate(Screens.CONTACT_MAIN)}>
      <AvatarIcon />
    </TouchableOpacity>
  );
};

export default AvatarButton;
