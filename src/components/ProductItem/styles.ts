import {StyleSheet} from 'react-native';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const styles = StyleSheet.create({
  itemProduct: {
    width: 147,
    maxWidth: '100%',
    backgroundColor: Theme[Config.theme].secondColor,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 21,
  },
  itemProductImg: {
    width: '100%',
    height: 100,
  },
  wrapperProdText: {
    marginTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  headingText: {
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
  },
  headingTextDisc: {
    color: Theme[Config.theme].inactiveText,
    marginTop: 10,
  },
  buttonAddCart: {
    width: 48,
    height: 48,
    backgroundColor: Theme[Config.theme].buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  flexWrapFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
  },
  priceTextItem: {
    color: Theme[Config.theme].loaderColor,
    fontFamily: 'Mont-Bold',
    fontSize: 16,
    lineHeight: 28,
  },
});
