import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../consts/ScreensName';
import {ContactMain} from '../../screens/Contact/ContactMain';

const Stack = createStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.CONTACT_MAIN} component={ContactMain} />
    </Stack.Navigator>
  );
};

export default ContactsStack;
