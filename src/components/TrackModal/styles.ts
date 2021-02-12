import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerModal: {
    width: '85%',
    height: 213,
    backgroundColor: '#1D2335',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 42,
  },
  containerModalDistance: {
    height: 97,
    backgroundColor: '#ffffff',
    borderRadius: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callWrapper: {
    marginTop: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  headingText: {
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },
  contexText: {
    color: '#9FABC2',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    marginTop: 5,
  },
});
