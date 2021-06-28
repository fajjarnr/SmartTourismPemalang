import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, TextInput} from '../../components';
import {API_HOST} from '../../config/API';
import {setLoading} from '../../redux/actions';
import {getData, showMessage, storeData, useForm} from '../../utils';

const ProfileEdit = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    address: '',
    photo: '',
    city: '',
  });

  const [photo, setPhoto] = useState('');
  const [userPhoto, setUserPhoto] = useState({});
  const [userName, setUserName] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userPhone, setUserPhone] = useState({});
  const [userAddress, setUserAddress] = useState({});
  const [userCity, setUserCity] = useState({});

  const dispatch = useDispatch();

  const {photoReducer} = useSelector(state => state);

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserPhoto(res);
      setUserName(res);
      setUserEmail(res);
      setUserPhone(res);
      setUserAddress(res);
      setUserCity(res);
    });
  }, []);

  const onSubmit = () => {
    console.log('form: ', form);

    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/user`, form, {
          headers: {Authorization: resToken.value},
        })
        .then(res => {
          const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
          const profile = res.data.data.user;

          if (photoReducer.isUploadPhoto) {
            const photoForUpload = new FormData();
            photoForUpload.append('file', photoReducer);

            axios
              .post(`${API_HOST.url}/user/photo`, photoForUpload, {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then(resUpload => {
                dispatch({type: 'SET_UPDATE_PROFILE', value: form}); //
                profile.profile_photo_path = `https://smarttourismpemalang.codes/storage/${resUpload.data.data[0]}`;
                storeData('userProfile', profile);
                navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
              })
              .catch(error => {
                showMessage('upload foto tidak berhasil');
                navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
              });
          } else {
            showMessage('Update Profile Berhasil');
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
          }

          dispatch(setLoading(false));
        })
        .catch(err => {
          dispatch(setLoading(false));
          showMessage(err?.response?.data?.message);
        });
    });

    // navigation.navigate('MainApp');
  };

  const addPhoto = () => {
    let options = {
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel || response.errorMessage) {
        showMessage('Anda tidak memilih foto');
      } else {
        const source = {
          uri: response.uri,
        };

        const dataImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };

        setPhoto(source);

        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});
      }
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.wrapper}>
          <View style={styles.wrapperBorder}>
            <TouchableOpacity activeOpacity={0.7} onPress={addPhoto}>
              <View style={styles.border}>
                {photo ? (
                  <Image source={photo} style={styles.borderPhoto} />
                ) : (
                  <View style={styles.borderPhoto}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            icon="user"
            label="Nama"
            inputLabel={userName.name}
            autoCorrect={false}
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            icon="mail"
            label="Email"
            inputLabel={userEmail.email}
            autoCapitalize="none"
            autoCorrect={false}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            icon="phone"
            label="No Telpon"
            autoCorrect={false}
            keyboardType="phone-pad"
            inputLabel={userPhone.phone}
            value={form.phone}
            onChangeText={value => setForm('phone', value)}
          />
          <Gap height={16} />
          <TextInput
            icon="enviromento"
            label="Alamat"
            inputLabel={userAddress.address}
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            icon="enviromento"
            label="Kota"
            autoCorrect={false}
            inputLabel={userCity.city}
            value={form.city}
            onChangeText={value => setForm('city', value)}
          />
          <Gap height={16} />
          <TextInput
            icon="lock"
            label="Password"
            inputLabel="Ketikan password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={24} />
          <View style={styles.button}>
            <Button
              label="Update Profile"
              onPress={onSubmit}
              colorButton="#ff7c57"
              textColorButton="#FFFFFF"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    padding: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
    textAlign: 'center',
  },
  border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderPhoto: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBorder: {
    alignItems: 'center',
    marginBottom: 16,
  },
});
