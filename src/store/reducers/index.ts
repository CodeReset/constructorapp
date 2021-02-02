import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {menuReducer} from './menu';
import {authReducer} from './auth';
import {orderReducer} from './order';
import {persistReducer} from 'redux-persist';

const reducer = combineReducers({
  menuReducer,
  authReducer,
  orderReducer,
});

const configPersistor = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['menuReducer', 'authReducer', 'orderReducer'],
};

export default persistReducer(configPersistor, reducer);
