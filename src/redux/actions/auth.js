import Axios from 'axios';
import {API_HOST} from '../../config/API';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const signUpAction =
  (dataRegister, photoReducer, navigation) => dispatch => {
    Axios.post(`${API_HOST.url}/register`, dataRegister)
      .then(res => {
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            },
          })
            .then(resUpload => {
              //   profile.profile_photo_url = `https://smarttourismpemalang.codes/storage/${resUpload.data.data[0]}`;
              //   storeData('userProfile', profile);
              console.log('success upload: ', resUpload);
            })
            .catch(error => {
              showMessage('upload foto tidak berhasil');
            });
        }

        dispatch(setLoading(false));
        showMessage('Registrasi pengguna berhasil', 'success');
        navigation.reset('SignUpSuccess');
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(err?.response?.data?.message);
      });
  };

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      //   storeData('token', {value: token});
      //   storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(err?.response?.data?.message);
    });
};