import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Screens} from '../consts/ScreensName';

import MenuStack from '../stacks/MenuStack';
import ProfileStack from '../stacks/ProfileStack';
import ContactsStack from '../stacks/ContactsStack';
import CartStack from '../stacks/CartStack';

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator initialRouteName={Screens.UNIVERSAL_STACK_MENU}>
      <DrawerNav.Screen
        name={Screens.UNIVERSAL_STACK_MENU}
        component={MenuStack}
      />
      <DrawerNav.Screen
        name={Screens.UNIVERSAL_STACK_PROFILE}
        component={ProfileStack}
      />
      <DrawerNav.Screen
        name={Screens.UNIVERSAL_STACK_CONTACT}
        component={ContactsStack}
      />
      <DrawerNav.Screen
        name={Screens.UNIVERSAL_STACK_CART}
        component={CartStack}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
