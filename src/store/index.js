import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import drawableWidthRed from './reducer/drawableWidthRed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginRed from './reducer/loginRed';
import otpRed from './reducer/otpRed';
import userDataRed from './reducer/userDataRed';
import categoryRed from './reducer/categoryRed';
import dishListRed from './reducer/dishlistRed';
const reducers = combineReducers({
  drawableWidthRed,
  loginRed,
  otpRed,
  userDataRed,
  categoryRed,
  dishListRed
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(ReduxThunk)),
);

let persistor = persistStore(store);
export {persistor, store};
