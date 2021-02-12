import React from 'react';
import {Config} from '../../../config_app';
import {Theme} from '../../styles';

export const defaultStackOption = {
  title: '',
  headerStyle: {
    backgroundColor: Theme[Config.theme].mainColor,
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: Theme[Config.theme].mainText,
    fontFamily: 'Mont-SemiBold',
  },
};
