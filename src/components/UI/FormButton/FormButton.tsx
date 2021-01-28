import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from './styles';
interface Props {
  title: string;
  isDisabled?: boolean;
  handeClick: () => void;
}

const FormButton = ({title, isDisabled = false, handeClick}: Props) => {
  return (
    <TouchableOpacity
      style={styles.buttonFormWrapper}
      disabled={isDisabled}
      onPress={handeClick}>
      <Text style={styles.buttonFormText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
