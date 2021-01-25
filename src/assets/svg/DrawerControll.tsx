import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const DrawerControll = (props: any) => {
  return (
    <Svg width={18} height={12} viewBox="0 0 18 12" fill="none" {...props}>
      <Path d="M0 12h18v-2H0v2zm0-5h18V5H0v2zm0-7v2h18V0H0z" fill="#B5BECF" />
    </Svg>
  );
};

export default DrawerControll;

const styles = StyleSheet.create({});
