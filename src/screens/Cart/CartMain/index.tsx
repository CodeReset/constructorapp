import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartList from '../../../components/CartList/CartList';
import {Screens} from '../../../navigator/consts/ScreensName';
import navigationService from '../../../navigator/navigationService';
import {
  ADD_TO_CART_MAIN,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART_MAIN,
} from '../../../store/actions/cartAdder';
import {SET_SELECTED_DETAIL_PROFILE} from '../../../store/actions/menuAction';
import {IProductList} from '../../../store/reducers/menu';
import {AppStore} from '../../../store/store';

import {styles} from './style';
import {totalPriceSelect} from './totalPriceSelect';

export const CartMain = () => {
  const dispatch = useDispatch();
  // Get cart
  const cart = useSelector((state: AppStore) => state.cartReducer.cart);

  const totalPrice = useSelector((state: AppStore) => totalPriceSelect(state));

  const addItemFromCart = (item: IProductList) => {
    dispatch({type: ADD_TO_CART_MAIN, payload: item});
  };

  const removeItemFromCart = (item: IProductList) => {
    dispatch({type: REMOVE_FROM_CART_MAIN, payload: item});
  };

  const goNextPayment = () => {
    navigationService.navigate(Screens.CART_MAP_ADRESS);
  };

  const removeFromCart = (item: IProductList) => {
    dispatch({type: REMOVE_ALL_FROM_CART, payload: item});
  };

  const goToDetailInfoFromCart = (item: IProductList) => {
    dispatch({type: SET_SELECTED_DETAIL_PROFILE, payload: item});
    navigationService.navigate(Screens.MENU_DETAILINFO_SCREEN);
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.scrollContainer}>
        {!!cart.length ? (
          <CartList
            cartList={cart}
            removeItem={removeItemFromCart}
            addItemFromCart={addItemFromCart}
            removeFromCart={removeFromCart}
            goToDetailInfoFromCart={goToDetailInfoFromCart}
          />
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
          <Text style={styles.costTotalWrapperText}>KZT {totalPrice}</Text>
        </View>
        {totalPrice > 0 && (
          <TouchableOpacity
            style={styles.buttonAdderToCard}
            onPress={goNextPayment}>
            <Text style={styles.buttonAdderToCardText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
