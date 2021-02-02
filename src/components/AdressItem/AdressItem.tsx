import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LocationItem from '../../assets/svg/LocationItem';
import {IAdress} from '../../store/reducers/order';

import {styles} from './styles';

interface Props {
  adress: IAdress;
  activeAdressC: IAdress;
  changeActiveAdress: (adress: IAdress) => void;
}

const AdressItem = ({adress, activeAdressC, changeActiveAdress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.wrapperItemAdress}
      onPress={() => changeActiveAdress(adress)}>
      <LocationItem />
      <Text style={styles.textItemAdress}>{adress.name}</Text>

      <View style={styles.radioButtonWrapper}>
        {activeAdressC.id === adress.id && (
          <View style={styles.radioButtonMark}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AdressItem;
