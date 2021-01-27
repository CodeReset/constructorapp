import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartList from '../../../components/CartList/CartList';
import {REMOVE_FROM_CART} from '../../../store/actions/menuAction';
import {IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';

import {styles} from './style';

export const CartMain = () => {
  const dispatch = useDispatch();
  // Get cart
  const cart = useSelector((state: AppStore) => state.menuReducer.cart);

  const removeItemFromCart = (item: IProductList) => {
    dispatch({type: REMOVE_FROM_CART, payload: item});
  };

  const goNextPayment = () => {
    console.log('GO to payment');
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.scrollContainer}>
        {!!cart.length ? (
          <CartList cartList={cart} removeItem={removeItemFromCart} />
        ) : (
          <Text style={styles.emptyTextControl}>
            У вас пока нет товара в карзине
          </Text>
        )}
      </View>

      {/* Total price */}
      <View style={styles.costTotalWrapper}>
        <View>
          <Text style={styles.totlaPriceText}>Total price</Text>
          <Text style={styles.costTotalWrapperText}>$20000</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonAdderToCard}
          onPress={goNextPayment}>
          <Text style={styles.buttonAdderToCardText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
