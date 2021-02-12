import {StyleSheet} from 'react-native';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 30,
  },
  itemText: {
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].inactiveText,
    fontFamily: 'Mont-Regular',
  },
  activeCategory: {
    fontFamily: 'Mont-SemiBold',
    color: Theme[Config.theme].mainText,
  },
});
