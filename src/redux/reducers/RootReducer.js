import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userdataReducer from './userdataReducer';
import muqeetReducer from "./muqeetReducer";

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['userdataReducer', 'muqeetReducer'],
};

const rootReducer = combineReducers({
  userdataReducer: userdataReducer,
  muqeetReducer: muqeetReducer
});

export default persistReducer(persistConfig, rootReducer);
