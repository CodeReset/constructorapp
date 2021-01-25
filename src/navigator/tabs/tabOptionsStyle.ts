import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const tabOptionsStyle = {
  style: {
    elevation: 0,
    borderTopWidth: 0,
    backgroundColor: Theme[Config.theme].secondColor,
    paddingBottom: 20,
  },
  activeTintColor: '#FD4035',
  inactiveTintColor: '#9FABC2',
  showLabel: false,
};
