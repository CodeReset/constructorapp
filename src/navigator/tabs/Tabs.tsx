import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../consts/ScreensName';
import MenuStack from '../stacks/MenuStack';
import CartStack from '../stacks/CartStack';
import ContactsStack from '../stacks/ContactsStack';
import ProfileStack from '../stacks/ProfileStack';
import {tabOptionsStyle} from './tabOptionsStyle';
import HomeIconSvg from '../../assets/svg/HomeIconSvg';
import LoversIconSvg from '../../assets/svg/LoversIconSvg';
import NotificationIconSvg from '../../assets/svg/NotificationIconSvg';
import CartIconSvg from '../../assets/svg/CartIconSvg';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.UNIVERSAL_STACK_MENU}
      tabBarOptions={{
        ...tabOptionsStyle,
      }}>
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_MENU}
        component={MenuStack}
        options={{tabBarIcon: ({color}) => <HomeIconSvg colorStroke={color} />}}
      />
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_PROFILE}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => <LoversIconSvg colorStroke={color} />,
        }}
      />
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_CONTACT}
        component={ContactsStack}
        options={{
          tabBarIcon: ({color}) => <NotificationIconSvg colorStroke={color} />,
        }}
      />
      <Tab.Screen
        name={Screens.UNIVERSAL_STACK_CART}
        component={CartStack}
        options={{
          tabBarIcon: ({color}) => <CartIconSvg colorStroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
