import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ActiveAdress from '../../assets/svg/ActiveAdress';

import IconProfileEdit from '../../assets/svg/IconProfileEdit';
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
      <View style={styles.additionalTest}>
        <View style={styles.itemWrapperD}>
          <View style={styles.iconWrapper}>
            <IconProfileEdit />
          </View>
          <View>
            <Text style={styles.headingText}>Distance</Text>
            <Text style={styles.contextText}>3.8 km</Text>
          </View>
        </View>

        <View style={styles.itemWrapperD}>
          <View style={styles.iconWrapper}>
            <IconProfileEdit />
          </View>
          <View>
            <Text style={styles.headingText}>Delivery Time</Text>
            <Text style={styles.contextText}>15-20 min</Text>
          </View>
        </View>
      </View>
      <Text style={styles.headingHeaderBottomList}>Previous Address</Text>
    </View>
  );
};

export default MapSheetHeader;
