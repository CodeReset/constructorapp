import React from 'react';
import {Button, Text, View} from 'react-native';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';

export const ProfileMain = () => {
  const goTo = () => {
    navigationService.navigate(Screens.PROFILE_DETAILINFO_SCREEN);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is ProfileMain!!!</Text>

      <Button title="Go to detail info" onPress={goTo} />
    </View>
  );
};
