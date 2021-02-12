import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  buttonFormWrapper: {
    backgroundColor: Theme[Config.theme].buttonColor,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    height: 58,
  },
  buttonFormText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Mont-SemiBold',
  },
});
