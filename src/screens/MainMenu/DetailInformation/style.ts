import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: Theme[Config.theme].secondColor,
  },
  scrollContainer: {
    backgroundColor: Theme[Config.theme].mainColor,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    paddingBottom: 45,
  },
  imageBackground: {
    width: '100%',
    height: 322,
  },
  imageStyleBg: {
    borderBottomLeftRadius: 47,
    borderBottomRightRadius: 47,
  },
  viewPaddingContent: {
    paddingHorizontal: 30,
  },
  descriptionInfo: {
    fontSize: 12,
    lineHeight: 18,
    color: '#9FABC2',
    marginTop: 23,
    fontFamily: 'Mont-SemiBold',
  },
  qualityTopAlign: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qualityTopAlignText: {
    color: '#4A4C67',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-Bold',
  },
  descriptionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  descriptionIconTeam: {
    alignItems: 'center',
  },
  textDescriptionLine: {
    marginTop: 7,
    color: '#4A4C67',
    fontSize: 13,
    lineHeight: 17,
    fontFamily: 'Mont-SemiBold',
  },
  wrapperSizeGramm: {
    flexDirection: 'row',
  },
  itemSizeGramm: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F3F6FA',
    borderRadius: 10,
    marginLeft: 15,
  },
  textSizeGramm: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    color: '#9FABC2',
  },
  activeItemSizeGramm: {
    backgroundColor: '#FD4035',
  },
  activeTextSizeGramm: {
    color: '#ffffff',
  },
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
});
