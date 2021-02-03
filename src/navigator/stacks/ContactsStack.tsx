import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../consts/ScreensName';
import {ContactMain} from '../../screens/Contact/ContactMain';
import {ChangePassword} from '../../screens/Contact/ChangePassword/ChangePassword';
import {stackMOptions} from './stackMOptions';
import {ProfileInfo} from '../../screens/Contact/ProfileInfo/ProfileInfo';

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
        name={Screens.CONTACT_CHANGE_PASSWORD}
        component={ChangePassword}
        options={{...stackMOptions, headerTransparent: true}}
      />

      <Stack.Screen
        name={Screens.CONTACT_PROFILE_INFO}
        component={ProfileInfo}
        options={{...stackMOptions, headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};

export default ContactsStack;
