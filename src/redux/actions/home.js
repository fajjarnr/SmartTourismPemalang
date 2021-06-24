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

export const getDestinationByTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}/destination?types=${types}`)
    .then(response => {
      console.log('response TYPES:>> ', response);

      if (types === 'new_food') {
        dispatch({type: 'SET_NEW', value: response.data.data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: response.data.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: response.data.data});
      }
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
