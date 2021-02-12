import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: Theme[Config.theme].secondColor,
  },
  scrollContainer: {
    height: '80%',
    maxHeight: '80%',
    backgroundColor: Theme[Config.theme].mainColor,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    paddingHorizontal: 30,
    paddingTop: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  costTotalWrapper: {
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  textHeadignSuccess: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 31,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
    marginTop: 25,
  },
  textTextSuccess: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9FABC2',
    textAlign: 'center',
    fontFamily: 'Mont-Regular',
    marginTop: 10,
  },
});
