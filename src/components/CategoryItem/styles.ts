import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 30,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#9FABC2',
    fontFamily: 'Mont-Regular',
  },
  activeCategory: {
    fontFamily: 'Mont-SemiBold',
    color: '#141929',
  },
  editProfileItem: {
    flexDirection: 'row',
    marginTop: 30,
    // alignItems: 'center',
  },
  rightEditWrapper: {
    marginLeft: 'auto',
  },
  textBlockProfile: {
    marginLeft: 20,
    alignSelf: 'center',
  },

  labelProfile: {
    color: '#9FABC2',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    marginBottom: 10,
  },
  textProfile: {
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    fontWeight: 'normal',
  },
  inputProfiler: {
    padding: 0,
    height: 18,
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    fontWeight: 'normal',
  },
  iconaProfile: {
    width: 55,
    height: 65,
    borderWidth: 2,
    borderColor: '#F3F6FA',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
