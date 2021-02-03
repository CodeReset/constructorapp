import React from 'react';
import {StyleSheet} from 'react-native';

import Svg, {Path} from 'react-native-svg';

interface Props {}

const SuccessSvg = (props: Props) => {
  return (
    <Svg width={136} height={127} viewBox="0 0 136 127" fill="none">
      <Path
        d="M118.416 43.773a58.319 58.319 0 013.49 19.914c0 32.31-26.285 58.594-58.594 58.594-32.308 0-58.593-26.285-58.593-58.594 0-32.308 26.285-58.593 58.593-58.593 13.32 0 25.61 4.476 35.464 11.993l3.576-3.148C91.59 5.473 78.036.406 63.312.406 28.42.406.032 28.794.032 63.688c0 34.893 28.387 63.281 63.28 63.281 34.894 0 63.282-28.388 63.282-63.281 0-8.349-1.641-16.32-4.592-23.626l-3.586 3.71z"
        fill="#9FABC2"
      />
      <Path
        d="M126.594 5.094L68 56.656l-25.781-18.75-9.375 9.375L68 82.438l67.969-70.313-9.375-7.031z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default SuccessSvg;

const styles = StyleSheet.create({});
