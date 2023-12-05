import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import drawableWidthRed from './reducer/drawableWidthRed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  drawableWidthRed,
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
