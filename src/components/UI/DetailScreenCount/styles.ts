import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  minusDescriment: {
    width: 44,
    height: 44,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#E0E5F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIncriment: {
    width: 44,
    height: 44,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FD4035',
  },
  countetItemProducts: {
    fontSize: 24,
    lineHeight: 31,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
  },
  counterWrapper: {
    width: 129,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
