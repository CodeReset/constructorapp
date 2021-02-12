import {StyleSheet} from 'react-native';
import {Config} from '../../../../config_app';
import {Theme} from '../../../styles';

export const styles = StyleSheet.create({
  mapWrapper: {
    flex: 1,
    backgroundColor: Theme[Config.theme].mainColor,
  },
  mapStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Theme[Config.theme].mainColor,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Theme[Config.theme].mainColor,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: Theme[Config.theme].loaderColor,
    borderRadius: 4,
  },
});
