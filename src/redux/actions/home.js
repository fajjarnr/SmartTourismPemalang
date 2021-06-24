import Axios from 'axios';
import {API_HOST} from '../../config/API';

export const getDestinationData = () => dispatch => {
  Axios.get(`${API_HOST.url}/destination`)
    .then(response => {
      console.log('response DESTINATION :>> ', response.data.data);
      dispatch({type: 'SET_DESTINATION', value: response.data.data});
    })
    .catch(err => {
      console.log('err: ', err);
    });
};

export const getBannerData = () => dispatch => {
  Axios.get(`${API_HOST.url}/banner`)
    .then(response => {
      console.log('response BANNER:>> ', response.data.data);
      dispatch({type: 'SET_BANNER', value: response.data.data});
    })
    .catch(err => {
      console.log('err: ', err);
    });
};

export const getDestinationByCategory = id => dispatch => {
  Axios.get(`${API_HOST.url}/destination/${id}`)
    .then(response => {
      console.log('response CATEGORY:>> ', response.data.data);

      if (id === '1') {
        dispatch({type: 'SET_WISATA_ALAM', value: response.data.data.data});
      }
      if (id === '2') {
        dispatch({type: 'SET_WISATA_BUATAN', value: response.data.data.data});
      }
      if (id === '3') {
        dispatch({type: 'SET_WISATA_BUDAYA', value: response.data.data.data});
      }
      if (id === '4') {
        dispatch({type: 'SET_KULINER_KHAS', value: response.data.data.data});
      }
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
