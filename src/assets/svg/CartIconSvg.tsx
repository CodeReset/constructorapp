import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const CartIconSvg = (props: any) => {
  return (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
      <Path
        d="M6 16c-1.1 0-1.99.9-1.99 2S4.9 20 6 20s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L18.42 2h-.01l-1.1 2-2.76 5H7.53l-.13-.27L5.16 4l-.95-2-.94-2H0v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H6.42c-.13 0-.25-.11-.25-.25z"
        fill={props.colorStroke}
      />
    </Svg>
  );
};

export default CartIconSvg;

const styles = StyleSheet.create({});
