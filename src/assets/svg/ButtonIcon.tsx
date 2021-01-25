import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ButtonIcon = (props: any) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" fill="#fff" />
    </Svg>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({});
