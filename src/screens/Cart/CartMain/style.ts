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
    color: Theme[Config.theme].mainText,
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
    color: Theme[Config.theme].mainText,
    fontSize: 24,
    lineHeight: 31,
    fontFamily: 'Mont-SemiBold',
  },
  buttonAdderToCard: {
    width: 190,
    height: 58,
    borderRadius: 18,
    backgroundColor: Theme[Config.theme].buttonColor,
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
    color: Theme[Config.theme].mainText,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },
});
