import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';
import {CartMain} from '../../screens/Cart/CartMain';
import {defaultStackOption} from './defaultStackOption';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CART_MAIN}
        component={CartMain}
        options={{
          ...defaultStackOption,
          title: 'My Cart',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
