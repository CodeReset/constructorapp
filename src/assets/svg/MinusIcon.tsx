import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const MinusIcon = (props: any) => {
  return (
    <Svg width={14} height={2} viewBox="0 0 14 2" fill="none">
      <Path fill="#9FABC2" d="M0 0h14v2H0z" />
    </Svg>
  );
};

export default MinusIcon;

const styles = StyleSheet.create({});
