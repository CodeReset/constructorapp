import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationService';

import Drawer from './drawer/Drawer';
import Tabs from './tabs/Tabs';

import {Config} from '../../config_app';

const Navigator = () => {
  const checkNavigationMenu = () => {
    switch (Config.navigatorTypeFromJSON) {
      // @ts-ignore
      case 'drawer':
        return <Drawer />;
      // @ts-ignore
      case 'tabs':
        return <Tabs />;
    }
  };
  return (
    <NavigationContainer ref={navigationRef}>
      {checkNavigationMenu()}
    </NavigationContainer>
  );
};

export default Navigator;
