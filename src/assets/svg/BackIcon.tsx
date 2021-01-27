import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const BackIcon = (props: any) => {
  return (
    <Svg width={8} height={12} viewBox="0 0 8 12" fill="none">
      <Path
        d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6l4.58-4.59z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default BackIcon;

const styles = StyleSheet.create({});
