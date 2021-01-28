import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundScrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bgTopContainer: {
    width: '100%',
    height: 279,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBgTop: {
    fontSize: 36,
    lineHeight: 46,
    color: '#FFFFFF',
    fontFamily: 'Mont-Bold',
  },
  tabWrapper: {
    height: 61,
    backgroundColor: '#F3F6FA',
    borderBottomRightRadius: 42,
    borderBottomLeftRadius: 42,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabWrapperMain: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabItemAuthentif: {
    paddingBottom: 15,
    width: 90,
    alignItems: 'center',
  },
  tabItemAuthentifText: {
    color: '#9FABC2',
    fontFamily: 'Mont-SemiBold',
    fontSize: 14,
    lineHeight: 18,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FD4035',
  },
  activeTabText: {
    color: '#141929',
    fontFamily: 'Mont-Bold',
  },
  wrapprFormContent: {
    marginTop: 15,
    paddingHorizontal: 30,
  },
});
