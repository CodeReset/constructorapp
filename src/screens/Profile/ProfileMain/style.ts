import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: Theme[Config.theme].secondColor,
  },
  scrollContainer: {
    height: '90%',
    maxHeight: '97%',
    backgroundColor: Theme[Config.theme].mainColor,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    paddingHorizontal: 30,
    paddingTop: 33,
  },
  emptyTextControl: {
    alignSelf: 'center',
    fontFamily: 'Mont-SemiBold',
    fontSize: 15,
  },
});
