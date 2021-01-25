import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  buttonRigh: {
    width: 46,
    height: 46,
    backgroundColor: Theme[Config.theme].mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginLeft: 33,
    marginTop: 18,
    borderWidth: 2,
    borderColor: Theme[Config.theme].headerborder,
  },
});
