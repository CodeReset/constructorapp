import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';
import {CartMain} from '../../screens/Cart/CartMain';
import {defaultStackOption} from './defaultStackOption';
import {CartMapAdress} from '../../screens/Cart/CartMapAdress';
import {stackMOptions} from './stackMOptions';
import CartSuccess from '../../screens/Cart/CartSuccess/CartSuccess';
import CartChecout from '../../screens/Cart/CartChecout/CartChecout';
import BackArrow from '../../components/UI/BackArrow/BackArrow';
import CloseButton from '../../components/UI/CloseButton/CloseButton';

const Stack = createStackNavigator();

const CartStack = (): JSX.Element => {
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

      <Stack.Screen
        name={Screens.CART_CHECKOUT}
        component={CartChecout}
        options={{
          ...defaultStackOption,
          title: 'Checkout',
          headerBackImage: () => <BackArrow />,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name={Screens.CART_SUCCESS}
        component={CartSuccess}
        options={{
          ...stackMOptions,
          headerLeft: () => null,
          headerRight: () => <CloseButton />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
