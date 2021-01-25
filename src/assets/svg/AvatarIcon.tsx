import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const AvatarIcon = (props: any) => {
  return (
    <Svg width={34} height={34} viewBox="0 0 34 34" fill="none" {...props}>
      <Path
        d="M12 16.583a2.084 2.084 0 10.002 4.168A2.084 2.084 0 0012 16.583zm10 0a2.084 2.084 0 10.002 4.168A2.084 2.084 0 0022 16.583zM17 .333C7.792.333.333 7.791.333 17c0 9.208 7.459 16.666 16.667 16.666 9.209 0 16.667-7.458 16.667-16.666C33.667 7.79 26.208.333 17 .333zm0 30C9.65 30.333 3.667 24.35 3.667 17c0-.484.033-.959.083-1.425a16.714 16.714 0 008.684-8.95c3.016 4.25 7.975 7.041 13.591 7.041 1.292 0 2.55-.158 3.75-.441.359 1.2.559 2.466.559 3.775 0 7.35-5.984 13.333-13.334 13.333z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default AvatarIcon;

const styles = StyleSheet.create({});
