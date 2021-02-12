import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PhoneIcon from '../../assets/svg/PhoneIcon';

// @ts-ignore
import call from 'react-native-phone-call';
import {styles} from './styles';

const args = {
  number: '9093900003', // String value with the number to call
  prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
};
interface Props {}

const TrackModal = (props: Props) => {
  const goCallTel = () => {
    call(args).catch(console.error);
  };

  return (
    <View style={styles.containerModal}>
      <View style={styles.containerModalDistance}>
        <Image source={require('../../assets/images/timetraker.png')} />
      </View>

      <View style={styles.callWrapper}>
        <View>
          <Text style={styles.headingText}>George Hionidis</Text>
          <Text style={styles.contexText}>Your Courier</Text>
        </View>

        <TouchableOpacity onPress={goCallTel}>
          <PhoneIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrackModal;
