import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 35,
  },
  searchInputWrapper: {
    width: '80%',
    position: 'relative',
  },
  SearchInput: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#F3F6FA',
    height: 58,
    paddingLeft: 53,
    paddingRight: 10,
    fontSize: 14,
    color: '#141929',
    fontFamily: 'Mont-Regular',
    fontWeight: 'normal',
  },
  buttonSvgWrapper: {
    width: '16%',
  },
  buttonSvg: {
    flex: 1,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#FD4035',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
