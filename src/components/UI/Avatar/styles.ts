import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  buttonRigh: {
    width: 46,
    height: 46,
    backgroundColor: Theme[Config.theme].secondColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginRight: 33,
    marginTop: 18,
  },
});
