import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {menuReducer} from './menu';
import {authReducer} from './auth';
import {orderReducer} from './order';
import {cartReducer} from './cart';
import {persistReducer} from 'redux-persist';

const reducer = combineReducers({
  menuReducer,
  authReducer,
  orderReducer,
  cartReducer,
});

const configPersistor = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cartReducer'],
  blacklist: ['menuReducer', 'authReducer', 'orderReducer'],
};

export default persistReducer(configPersistor, reducer);
