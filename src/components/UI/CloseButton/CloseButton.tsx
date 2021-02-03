import React from 'react';
import {TouchableOpacity} from 'react-native';
import CloseIcon from '../../../assets/svg/CloseIcon';

import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';

import {styles} from './styles';

const CloseButton = () => {
  return (
    <TouchableOpacity
      style={styles.buttonRigh}
      onPress={() => navigationService.popToTop()}>
      <CloseIcon />
    </TouchableOpacity>
  );
};

export default CloseButton;
