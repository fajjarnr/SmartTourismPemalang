import axios from 'axios';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, TextInput, Header} from '../../components';
import {API_HOST} from '../../config/API';
import {getData, showMessage, useForm} from '../../utils';

const Message = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);

    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/contact`, form, {
          headers: {Authorization: resToken.value},
        })
        .then(res => {
          showMessage(res.data.meta.message);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch(err => {
          console.log('err: ', err);
          showMessage(err?.response?.data?.message);
        });
    });
  };

  return (
    <View style={styles.page}>
      <Header
        title="Bantuan & Keluhan"
        subTitle="Sampaikan pesanmu kepada kami"
        back
        onPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <TextInput
          icon="user"
          label="Nama"
          inputLabel="Ketikan Nama"
          autoCorrect={false}
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={16} />
        <TextInput
          icon="mail"
          label="Email"
          inputLabel="Ketikan email"
          autoCapitalize="none"
          autoCorrect={false}
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          icon="message1"
          label="Pesan"
          autoCorrect={false}
          inputLabel="Ketikan pesan"
          multiline={true}
          value={form.message}
          onChangeText={value => setForm('message', value)}
        />
        <Gap height={34} />
        <View style={styles.button}>
          <Button
            label="Kirim Pesan"
            onPress={onSubmit}
            colorButton="#ff7c57"
            textColorButton="#FFFFFF"
          />
        </View>
      </View>
    </View>
  );
};

export default Message;

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
});
