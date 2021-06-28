import Axios from 'axios';
import {API_HOST} from '../../config/API';

export const getDestinationData = () => dispatch => {
  Axios.get(`${API_HOST.url}/destination`)
    .then(response => {
      dispatch({type: 'SET_DESTINATION', value: response.data.data.data});
    })
    .catch(err => {
      console.log('err: ', err);
    });
};

export const getBannerData = () => dispatch => {
  Axios.get(`${API_HOST.url}/banner`)
    .then(response => {
      dispatch({type: 'SET_BANNER', value: response.data.data});
    })
    .catch(err => {
      console.log('err: ', err);
    });
};

export const getDestinationDataByTypes = types => dispatch => {
  Axios.get(`${API_HOST.url}/destination/query?types=${types}`)
    .then(res => {
      if (types === 'new') {
        dispatch({type: 'SET_NEW', value: res.data.data.data});
      }
      if (types === 'popular') {
        dispatch({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch(err => {
      console.log('err: ', err);
    });
};
