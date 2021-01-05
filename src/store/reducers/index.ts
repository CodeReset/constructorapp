import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {menuReducer} from './menu';
import {authReducer} from './auth';
import {persistReducer} from 'redux-persist';

const reducer = combineReducers({
  menuReducer,
  authReducer,
});

const configPersistor = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['menuReducer'],
};

export default persistReducer(configPersistor, reducer);
