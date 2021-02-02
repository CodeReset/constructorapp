import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';
import {CartMain} from '../../screens/Cart/CartMain';
import {defaultStackOption} from './defaultStackOption';
import {CartMapAdress} from '../../screens/Cart/CartMapAdress';
import {stackMOptions} from './stackMOptions';

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

      <Stack.Screen
        name={Screens.CART_MAP_ADRESS}
        component={CartMapAdress}
        options={{
          ...stackMOptions,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
