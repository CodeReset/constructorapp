import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  additionStyle: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  additionStyleItem: {
    borderRadius: 18,
    width: 92,
    height: 134,
    borderWidth: 2,
    borderColor: '#F3F6FA',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  additionStyleItemText: {
    color: '#4A4C67',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Mont-SemiBold',
  },
  additionStyleItemPrice: {color: '#FD4035', fontFamily: 'Mont-Bold'},
  activeAdditionStyleItemPrice: {
    color: '#ffffff',
  },
  activeAdditionStyleItem: {
    backgroundColor: '#FD4035',
  },
  activeAdditionStyleItemText: {
    color: '#ffffff',
  },
});
