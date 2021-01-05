import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../consts/ScreensName';
import MenuStack from '../stacks/MenuStack';
import CartStack from '../stacks/CartStack';
import ContactsStack from '../stacks/ContactsStack';
import ProfileStack from '../stacks/ProfileStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Screens.UNIVERSAL_STACK_MENU}>
      <Tab.Screen name={Screens.UNIVERSAL_STACK_MENU} component={MenuStack} />
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_PROFILE}
        component={ProfileStack}
      />
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_CONTACT}
        component={ContactsStack}
      />
      <Tab.Screen name={Screens.UNIVERSAL_STACK_CART} component={CartStack} />
    </Tab.Navigator>
  );
};

export default Tabs;
