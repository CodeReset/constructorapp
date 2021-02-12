import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Rect, Path} from 'react-native-svg';

interface Props {}

const PhoneIcon = (props: Props) => {
  return (
    <Svg width={46} height={46} viewBox="0 0 46 46" fill="none">
      <Rect width={46} height={46} rx={23} fill="#3CC362" />
      <Path
        d="M17.62 21.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V31c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="#fff"
      />
    </Svg>
  );
};

export default PhoneIcon;

const styles = StyleSheet.create({});
