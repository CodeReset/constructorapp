import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';

import {Main} from '../../screens/MainMenu/Main';
import {DetailInformation} from '../../screens/MainMenu/DetailInformation';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.MENU_MAIN_SCREEN} component={Main} />
      <Stack.Screen
        name={Screens.MENU_DETAILINFO_SCREEN}
        component={DetailInformation}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
