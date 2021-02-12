import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    lineHeight: 35,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
  },
});
