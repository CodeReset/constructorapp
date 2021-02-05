import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../consts/ScreensName';
import {ContactMain} from '../../screens/Contact/ContactMain';
import {ChangePassword} from '../../screens/Contact/ChangePassword/ChangePassword';
import {stackMOptions} from './stackMOptions';
import {ProfileInfo} from '../../screens/Contact/ProfileInfo/ProfileInfo';
import ForgotPassword from '../../screens/Contact/ForgotPassword/ForgotPassword';

const Stack = createStackNavigator();

const ContactsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CONTACT_MAIN}
        component={ContactMain}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Screens.CONTACT_FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{...stackMOptions, headerTransparent: true}}
      />

      <Stack.Screen
        name={Screens.CONTACT_CHANGE_PASSWORD}
        component={ChangePassword}
        options={{...stackMOptions, headerTransparent: true}}
      />

      <Stack.Screen
        name={Screens.CONTACT_PROFILE_INFO}
        component={ProfileInfo}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ContactsStack;
