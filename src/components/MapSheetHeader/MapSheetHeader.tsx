import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ActiveAdress from '../../assets/svg/ActiveAdress';
import {IAdress} from '../../store/reducers/order';

import {styles} from './styles';

interface Props {
  activeAdress: IAdress;
}

const MapSheetHeader = ({activeAdress}: Props) => {
  return (
    <View>
      <Text style={styles.headingHeaderList}>Choose Your Location</Text>
      <TouchableOpacity style={styles.activeAdressHeader}>
        <ActiveAdress />
        <Text style={styles.activeAdressText}>{activeAdress.name}</Text>
      </TouchableOpacity>
      <Text style={styles.headingHeaderBottomList}>Previous Address</Text>
    </View>
  );
};

export default MapSheetHeader;
