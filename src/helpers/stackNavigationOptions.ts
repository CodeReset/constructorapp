import {Config} from '../../config_app';
import {Theme} from '../styles';

export const stackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowColor: 'transparent',
    backgroundColor: Theme[Config.theme].mainColor,
  },
};
