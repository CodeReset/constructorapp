import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import MinusIcon from '../../../assets/svg/MinusIcon';
import PlusIcon from '../../../assets/svg/PlusIcon';

import {styles} from './styles';

interface Props {}

const DetailScreenCount = (props: Props) => {
  return (
    <View style={styles.counterWrapper}>
      <TouchableOpacity style={styles.minusDescriment}>
        <MinusIcon />
      </TouchableOpacity>
      <Text style={styles.countetItemProducts}>1</Text>
      <TouchableOpacity style={styles.plusIncriment}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreenCount;
