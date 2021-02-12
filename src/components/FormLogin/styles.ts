import {StyleSheet} from 'react-native';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';
export const styles = StyleSheet.create({
  labelForm: {
    color: Theme[Config.theme].inactiveText,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    marginTop: 25,
  },
  inputForm: {
    backgroundColor: '#F3F6FA',
    borderRadius: 20,
    paddingHorizontal: 25,
    marginTop: 10,
    color: '#181D2D',
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
    fontWeight: 'normal',
  },
  wrapperFormForgot: {
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
  },
  wrapperFormForgotText: {
    color: Theme[Config.theme].inactiveText,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Mont-SemiBold',
  },
  errorText: {
    paddingLeft: 25,
    color: '#FD4035',
    fontSize: 12,
    fontFamily: 'Mont-SemiBold',
    marginTop: 5,
  },
});
