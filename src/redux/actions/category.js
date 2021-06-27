import Axios from 'axios';
import {API_HOST} from '../../config/API';

export const getDestinationByCategory = id => dispatch => {
  Axios.get(`${API_HOST.url}/destination/${id}`)
    .then(response => {
      if (id === '1') {
        dispatch({type: 'SET_WISATA_ALAM', value: response.data.data});
      }
      if (id === '2') {
        dispatch({type: 'SET_WISATA_BUATAN', value: response.data.data});
      }
      if (id === '3') {
        dispatch({type: 'SET_WISATA_RELIGI', value: response.data.data});
      }
      if (id === '4') {
        dispatch({type: 'SET_DESA_WISATA', value: response.data.data});
      }
      if (id === '5') {
        dispatch({type: 'SET_HOTEL', value: response.data.data});
      }
      if (id === '6') {
        dispatch({type: 'SET_KULINER_KHAS', value: response.data.data});
      }
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
