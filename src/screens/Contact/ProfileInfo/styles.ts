import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  backgroundScrollView: {
    flex: 1,
    backgroundColor: Theme[Config.theme].mainColor,
  },
  bgTopContainer: {
    width: '100%',
    height: 145,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBgTop: {
    fontSize: 36,
    lineHeight: 46,
    color: '#FFFFFF',
    fontFamily: 'Mont-Bold',
  },
  wrapprFormContent: {
    marginTop: 15,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  imageProfile: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
