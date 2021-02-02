import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Path} from 'react-native-svg';

const MarkerSVG = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 14c-2.207 0-4-1.788-4-4.012C6 7.788 7.793 6 10 6s4 1.788 4 3.988A4.002 4.002 0 0110 14z"
        fill="#DB0000"
      />
      <Path
        d="M10 0C4.474 0 0 4.5 0 10c0 5.518 4.474 10 10 10s10-4.474 10-10c-.009-5.5-4.482-10-10-10zm0 2.14c4.325 0 7.86 3.535 7.86 7.86 0 4.35-3.535 7.886-7.86 7.886-4.35 0-7.886-3.535-7.886-7.886 0-4.325 3.526-7.86 7.886-7.86z"
        fill="#DB0000"
      />
    </Svg>
  );
};

export default MarkerSVG;

const styles = StyleSheet.create({});
