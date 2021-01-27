import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const CloseIconFavorite = () => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <Circle cx={13} cy={13} r={13} fill="#F3F6FA" />
      <Path
        d="M17.084 9.74l-.823-.823-3.26 3.26-3.262-3.26-.822.822L12.177 13l-3.26 3.261.822.823L13 13.823l3.261 3.26.823-.822-3.261-3.26 3.26-3.262z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default CloseIconFavorite;

const styles = StyleSheet.create({});
