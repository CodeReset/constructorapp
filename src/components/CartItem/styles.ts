import {StyleSheet} from 'react-native';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const styles = StyleSheet.create({
  fovoriteIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 30,
  },
  contextFavorite: {
    alignSelf: 'center',
    maxWidth: '50%',
  },
  fovoriteIconImage: {
    width: 90,
    height: 95,
    borderRadius: 20,
  },
  favoriteName: {
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
  },
  favoriteDescr: {
    fontSize: 12,
    lineHeight: 18,
    color: Theme[Config.theme].inactiveText,
    marginTop: 7,
    fontFamily: 'Mont-SemiBold',
  },
  favoritePrice: {
    marginTop: 10,
    color: Theme[Config.theme].loaderColor,
    fontFamily: 'Mont-Bold',
    fontSize: 16,
    lineHeight: 20,
  },
  counterItem: {
    height: 86,
    width: 30,
    borderRadius: 15,
    backgroundColor: Theme[Config.theme].headerborder,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counterItemText: {
    color: Theme[Config.theme].mainText,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Mont-SemiBold',
  },
});
