import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';
import {CartMain} from '../../screens/Cart/CartMain';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.CART_MAIN} component={CartMain} />
    </Stack.Navigator>
  );
};

export default CartStack;
