import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = (props: any) => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path d="M0 6h14v2H0V6z" fill="#fff" />
      <Path d="M6 14V0h2v14H6z" fill="#fff" />
    </Svg>
  );
};

export default PlusIcon;

const styles = StyleSheet.create({});
