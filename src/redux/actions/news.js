import Axios from 'axios';
import {API_HOST} from '../../config/API';

export const getNewsData = () => dispatch => {
  Axios.get(`${API_HOST.url}/news`)
    .then(response => {
      console.log('response NEWS :>> ', response.data.data);
      dispatch({type: 'SET_NEWS', value: response.data.data});
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
