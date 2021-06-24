import {combineReducers} from 'redux';
import {photoReducer, registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {newsReducer} from './news';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  homeReducer,
  newsReducer,
});

export default reducer;
