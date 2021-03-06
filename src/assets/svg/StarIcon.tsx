import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const StarIcon = (props: any) => {
  return (
    <Svg width={24} height={23} viewBox="0 0 24 23" fill="none">
      <Path
        d="M18.854 13.687c-.301.29-.44.717-.37 1.123l1.03 5.697c.082.486-.115.971-.521 1.25-.394.29-.915.325-1.355.093l-5.128-2.675a1.315 1.315 0 00-.58-.151h-.313a.942.942 0 00-.313.104l-5.13 2.688a1.35 1.35 0 01-.821.127 1.286 1.286 0 01-1.031-1.472l1.03-5.697c.07-.416-.069-.832-.369-1.133L.802 9.587A1.25 1.25 0 01.49 8.279a1.3 1.3 0 011.03-.868l5.755-.835c.44-.046.822-.312 1.019-.705L10.83.67c.057-.115.139-.22.232-.312l.103-.081c.047-.06.116-.104.187-.15l.126-.047.197-.081h.487a1.3 1.3 0 011.02.694L15.75 5.87c.185.382.544.637.96.705l5.756.835c.486.07.893.405 1.053.868.151.462.024.973-.335 1.309l-4.33 4.099z"
        fill="#FD4035"
      />
    </Svg>
  );
};

export default StarIcon;

const styles = StyleSheet.create({});
