import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LocationItem from '../../../assets/svg/LocationItem';
import AdressItem from '../../../components/AdressItem/AdressItem';
import BackArrow from '../../../components/UI/BackArrow/BackArrow';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';

import {styles} from './styles';

export interface IPaymantMethods {
  id: number;
  name: string;
}

const paymantMethods = [
  {
    id: 0,
    name: '**** **** **** 3858',
  },
  {
    id: 1,
    name: 'Cash',
  },
];

const CartChecout = () => {
  const [paymentMethod, setPaymentMethod] = useState<IPaymantMethods>({
    id: 0,
    name: '**** **** **** 3858',
  });
  const goToSuccess = () => {
    navigationService.navigate(Screens.CART_SUCCESS);
  };
  const changeActiveAdress = (method: IPaymantMethods) => {
    setPaymentMethod(method);
  };
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.scrollContainer}>
        {/* Refactor */}
        <View>
          <FlatList
            data={paymantMethods}
            renderItem={({item}) => (
              <AdressItem
                adress={item}
                activeAdressC={paymentMethod}
                changeActiveAdress={changeActiveAdress}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        {/* Refactor */}

        <ScrollView>
          <Text style={styles.couponLable}>Add coupon</Text>
          <View style={styles.couponFielWrapper}>
            <View>
              <Text style={styles.couponTextCode}>Code</Text>
              <Text style={styles.couponContextCode}>Georgenogi</Text>
            </View>
            <BackArrow />
          </View>

          <Text style={styles.couponLable}>Delivery Adress</Text>
          <View style={styles.adressItem}>
            <LocationItem />
            <Text style={styles.adressItemText}>Pushkin street, 42</Text>
          </View>

          <View style={styles.taxWrapper}>
            <Text style={styles.taxTextLeft}>Taxes</Text>
            <Text style={styles.taxTextRight}>$15.00</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.costTotalWrapper}>
        <View>
          <Text style={styles.totlaPriceText}>Total price</Text>
          <Text style={styles.costTotalWrapperText}>$20000</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonAdderToCard}
          onPress={() => goToSuccess()}>
          <Text style={styles.buttonAdderToCardText}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartChecout;
