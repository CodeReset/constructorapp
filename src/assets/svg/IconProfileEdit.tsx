import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Path} from 'react-native-svg';

const IconProfileEdit = () => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 1.9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2zm0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H1.9V13c0-.64 3.13-2.1 6.1-2.1zM8 0C5.79 0 4 1.79 4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
        fill="#FD4035"
      />
    </Svg>
  );
};

export default IconProfileEdit;

const styles = StyleSheet.create({});
