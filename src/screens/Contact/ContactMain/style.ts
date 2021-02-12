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
    height: 279,
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
  tabItemAuthentif: {
    paddingBottom: 15,
    width: 90,
    alignItems: 'center',
  },
  tabItemAuthentifText: {
    color: Theme[Config.theme].inactiveText,
    fontFamily: 'Mont-SemiBold',
    fontSize: 14,
    lineHeight: 18,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FD4035',
  },
  activeTabText: {
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-Bold',
  },
  wrapprFormContent: {
    marginTop: 15,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
