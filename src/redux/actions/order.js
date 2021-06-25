import axios from 'axios';
import {API_HOST} from '../../config/API';
import {getData} from '../../utils';

export const getOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/transaction`, {
        headers: {Authorization: resToken.value},
      })
      .then(response => {
        console.log('response ORDER: ', response.data.data.data);
        dispatch({type: 'SET_ORDER', value: response.data.data.data});
      })
      .catch(err => {
        console.log('error: ', err);
      });
  });
};

export const getInProgress = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=PENDING`, {
          headers: {Authorization: resToken.value},
        }),
        axios.get(`${API_HOST.url}/transaction?status=SUCCESS`, {
          headers: {Authorization: resToken.value},
        }),
      ])
      .then(
        axios.spread((response1, response2) => {
          const pending = response1.data.data.data;
          const success = response2.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success],
          });
        }),
      )
      .catch(err => {
        console.log('error in progress: ', err.response);
      });
  });
};

export const getPastOrders = () => dispatch => {
  getData('token').then(resToken => {
    axios
      .all([
        axios.get(`${API_HOST.url}/transaction?status=CANCELLED`, {
          headers: {Authorization: resToken.value},
        }),
      ])
      .then(
        axios.spread(res1 => {
          const cancelled = res1.data.data.data;
          dispatch({
            type: 'SET_PAST_ORDERS',
            value: [...cancelled],
          });
        }),
      )
      .catch(err => {
        console.log('error in progress: ', err.response);
      });
  });
};
