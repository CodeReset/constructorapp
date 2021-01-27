import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const WeightIcon = (props: any) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.5 1.5a5.218 5.218 0 00-5.25 5.25A5.218 5.218 0 0012.5 12a5.218 5.218 0 005.25-5.25A5.218 5.218 0 0012.5 1.5zm2.25 3.975c-.375.9-.9 2.025-1.2 2.325-.3.3-.675.45-1.05.45s-.75-.15-1.05-.45c-.6-.6-.6-1.5 0-2.1.3-.3 1.5-.825 2.325-1.2.3-.15.6-.075.825.15.225.225.3.525.15.825z"
        fill="#FD4035"
      />
      <Path
        d="M5.75 6.75c0-.225 0-.525.075-.75H5c-1.275 0-2.25.975-2.25 2.25v12c0 1.275.975 2.25 2.25 2.25h6.75v-9.075c-3.375-.375-6-3.225-6-6.675zM20 6h-.825c.075.225.075.525.075.75 0 3.45-2.625 6.3-6 6.675V22.5H20c1.275 0 2.25-.975 2.25-2.25v-12C22.25 6.975 21.275 6 20 6z"
        fill="#FD4035"
      />
    </Svg>
  );
};

export default WeightIcon;

const styles = StyleSheet.create({});
