import {StyleSheet} from 'react-native';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const styles = StyleSheet.create({
  headingHeaderList: {
    fontFamily: 'Mont-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].mainText,
  },
  headingHeaderBottomList: {
    fontFamily: 'Mont-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].mainText,
    marginTop: 45,
    marginBottom: 8,
  },
  activeAdressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F6FA',
    borderRadius: 18,
    height: 58,
    padding: 20,
    marginTop: 20,
  },
  activeAdressText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#141929',
    fontFamily: 'Mont-SemiBold',
    marginLeft: 10,
  },

  additionalTest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },

  headingText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#9FABC2',
    fontFamily: 'Mont-SemiBold',
  },
  contextText: {
    fontSize: 14,
    lineHeight: 18,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
    marginTop: 5,
  },
  iconWrapper: {
    width: 50,
    height: 58,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#F3F6FA',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemWrapperD: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
