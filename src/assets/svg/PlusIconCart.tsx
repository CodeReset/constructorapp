import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const PlusIconCart = () => {
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
      <Path d="M15.682 10.5v9.546h-1.364V10.5h1.364z" fill="#9FABC2" />
      <Path d="M10.227 14.59h9.546v1.364h-9.546v-1.363z" fill="#9FABC2" />
    </Svg>
  );
};

export default PlusIconCart;

const styles = StyleSheet.create({});
