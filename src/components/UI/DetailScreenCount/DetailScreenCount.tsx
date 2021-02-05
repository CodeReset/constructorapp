import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import MinusIcon from '../../../assets/svg/MinusIcon';
import PlusIcon from '../../../assets/svg/PlusIcon';

import {styles} from './styles';

interface Props {
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
}

const DetailScreenCount = ({count, addToCart, removeFromCart}: Props) => {
  return (
    <View style={styles.counterWrapper}>
      <TouchableOpacity style={styles.minusDescriment} onPress={removeFromCart}>
        <MinusIcon />
      </TouchableOpacity>
      <Text style={styles.countetItemProducts}>{count}</Text>
      <TouchableOpacity style={styles.plusIncriment} onPress={addToCart}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreenCount;
