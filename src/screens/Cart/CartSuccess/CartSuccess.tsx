import React from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import SuccessSvg from '../../../assets/svg/SuccessSvg';

import FormButton from '../../../components/UI/FormButton/FormButton';

import {styles} from './styles';

const CartSuccess = () => {
  const goToTrack = () => {
    console.log('GO TO TRACK');
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.scrollContainer}>
        <SuccessSvg />
        <Text style={styles.textHeadignSuccess}>Successful purchase</Text>
        <Text style={styles.textTextSuccess}>
          Hit the orange button down below{'\n'}to track order
        </Text>
      </View>

      <View style={styles.costTotalWrapper}>
        <FormButton title="Track order" handeClick={goToTrack} />
      </View>
    </View>
  );
};

export default CartSuccess;
