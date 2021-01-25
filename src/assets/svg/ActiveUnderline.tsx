import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

const ActiveUnderline = (props: any) => {
  return (
    <Svg
      style={styles.underline}
      width={15}
      height={4}
      viewBox="0 0 15 4"
      fill="none">
      <Rect width={15} height={4} rx={2} fill="#FD4035" />
    </Svg>
  );
};

export default ActiveUnderline;

const styles = StyleSheet.create({
  underline: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
