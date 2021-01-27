import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';

import {ProfileMain} from '../../screens/Profile/ProfileMain';
import {ProfileDetailInfo} from '../../screens/Profile/ProfileDetailInfo';
import {defaultStackOption} from './defaultStackOption';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.PROFILE_MAIN_SCREEN}
        component={ProfileMain}
        options={{
          ...defaultStackOption,
          title: 'Favorite',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={Screens.PROFILE_DETAILINFO_SCREEN}
        component={ProfileDetailInfo}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
