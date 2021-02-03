import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Circle, Path} from 'react-native-svg';

const ActiveEdit = () => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Circle cx={13} cy={13} r={13} fill="#F3F6FA" />
      <Path
        d="M7.75 16.063v2.188h2.188l6.451-6.452-2.187-2.188-6.452 6.452zm10.33-5.956a.58.58 0 000-.822L16.717 7.92a.58.58 0 00-.823 0l-1.067 1.067 2.187 2.188 1.068-1.068z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default ActiveEdit;

const styles = StyleSheet.create({});
