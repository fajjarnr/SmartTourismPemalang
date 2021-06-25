import {combineReducers} from 'redux';
import {photoReducer, registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {newsReducer} from './news';
import {orderReducer} from './order';
import {categoryReducer} from './category';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  newsReducer,
  orderReducer,
  categoryReducer,
});

export default reducer;
