import * as React from 'react';
// @ts-ignore
import {NavigationContainer} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

import {DrawerActions} from '@react-navigation/native';

// @ts-ignore
export const navigationRef: NavigationContainer = React.createRef();

export interface NavigationParams {
  [key: string]: any;
}

const navigate = (routeName: any, params?: NavigationParams) => {
  navigationRef.current?.navigate(routeName, params);
};

const replace = (rootName: string, params?: object) => {
  navigationRef.current.dispatch(StackActions.replace(rootName, params));
};

const pop = () => {
  navigationRef.current?.goBack();
};

const openDrawer = () => {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
};

// const resetMain = () => {
//   navigationRef.current?.reset({
//     index: 0,
//     routes: [{name: Screens.MAIN_CONTENT_STACK}],
//   });
// };

export default {
  navigate,
  pop,
  replace,
  openDrawer,
};
