import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import drawableWidthRed from './reducer/drawableWidthRed';
const reducers = combineReducers({
  drawableWidthRed
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(ReduxThunk)),
);

export {store};
