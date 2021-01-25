import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HomeIconSvg = (props: any) => {
  return (
    <Svg width={20} height={17} viewBox="0 0 20 17" fill="none">
      <Path d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8h5z" fill={props.colorStroke} />
    </Svg>
  );
};

export default HomeIconSvg;

const styles = StyleSheet.create({});
