import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = (props: any) => {
  return (
    <Svg
      style={styles.searchIcon}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none">
      <Path
        d="M12.5 11h-.79l-.28-.27A6.471 6.471 0 0013 6.5 6.5 6.5 0 106.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"
        fill="#9FABC2"
      />
    </Svg>
  );
};

export default SearchIcon;

const styles = StyleSheet.create({
  searchIcon: {
    position: 'absolute',
    top: 20,
    left: 25,
    zIndex: 2,
  },
});
