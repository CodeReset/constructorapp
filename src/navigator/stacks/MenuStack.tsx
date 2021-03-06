import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';

import {Main} from '../../screens/MainMenu/Main';
import {DetailInformation} from '../../screens/MainMenu/DetailInformation';
import {stackNavigationOptions} from '../../helpers/stackNavigationOptions';
import AvatarButton from '../../components/UI/Avatar/AvatarButton';
import {Config} from '../../../config_app';
import DrawerControl from '../../components/UI/DrawerControl/DrawerControl';
import {stackMOptions} from './stackMOptions';
import FavoriteIcon from '../../assets/svg/FavoriteIcon';
import FavoriteRight from '../../components/UI/FavoriteRight/FavoriteRight';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.MENU_MAIN_SCREEN}
        component={Main}
        options={{
          ...stackNavigationOptions,
          title: '',
          headerRight: () => <AvatarButton />,
          headerLeft: () =>
            Config.navigatorTypeFromJSON !== 'tabs' && <DrawerControl />,
        }}
      />
      <Stack.Screen
        name={Screens.MENU_DETAILINFO_SCREEN}
        component={DetailInformation}
        options={({route}: any) => ({
          headerShown: true,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerRight: () => <FavoriteRight />,
          ...stackMOptions,
        })}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;
