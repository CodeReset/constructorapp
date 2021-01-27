import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const MinusIconCart = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Circle
        cx={15}
        cy={15}
        r={14.318}
        transform="rotate(90 15 15)"
        fill="#F3F6FA"
        stroke="#E0E5F1"
        strokeWidth={1.364}
      />
      <Path fill="#9FABC2" d="M10.545 14.091h9.545v1.364h-9.545z" />
    </Svg>
  );
};

export default MinusIconCart;

const styles = StyleSheet.create({});
