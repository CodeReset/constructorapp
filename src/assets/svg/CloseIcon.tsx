import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Rect, Path} from 'react-native-svg';

interface Props {}

const CloseIcon = (props: Props) => {
  return (
    <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
      <Rect
        x={0.5}
        y={0.5}
        width={45}
        height={45}
        rx={17.5}
        fill="#fff"
        stroke="#F3F6FA"
      />
      <Path
        d="M30 17.41L28.59 16 23 21.59 17.41 16 16 17.41 21.59 23 16 28.59 17.41 30 23 24.41 28.59 30 30 28.59 24.41 23 30 17.41z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default CloseIcon;

const styles = StyleSheet.create({});
