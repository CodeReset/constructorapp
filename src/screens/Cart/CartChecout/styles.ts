import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: Theme[Config.theme].secondColor,
  },
  scrollContainer: {
    height: '80%',
    maxHeight: '80%',
    backgroundColor: Theme[Config.theme].mainColor,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    paddingHorizontal: 30,
    paddingTop: 33,
  },
  emptyTextControl: {
    alignSelf: 'center',
    fontFamily: 'Mont-SemiBold',
    fontSize: 15,
  },
  costTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  costTotalWrapperText: {
    color: '#141929',
    fontSize: 24,
    lineHeight: 31,
    fontFamily: 'Mont-SemiBold',
  },
  buttonAdderToCard: {
    width: 190,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#FD4035',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdderToCardText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Mont-SemiBold',
  },
  totlaPriceText: {
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },

  couponLable: {
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    marginBottom: 10,
    marginTop: 35,
  },
  couponFielWrapper: {
    height: 65,
    backgroundColor: '#F3F6FA',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  couponTextCode: {
    color: '#9FABC2',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },
  couponContextCode: {
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    marginTop: 3,
  },
  adressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  adressItemText: {
    marginLeft: 10,
    color: '#9FABC2',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Mont-SemiBold',
  },
  taxWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taxTextLeft: {
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },
  taxTextRight: {
    color: '#181D2D',
    fontSize: 16,
    fontFamily: 'Mont-Bold',
  },
});
