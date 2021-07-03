import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {signInAction} from '../../redux/actions';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <Header title="Sign In" subTitle="Selamat Datang Kembali" />
      <View style={styles.wrapper}>
        <Gap height={35} />
        <TextInput
          icon="mail"
          label="Email Address"
          inputLabel="Masukkan alamat email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          icon="lock"
          label="Password"
          inputLabel="Masukkan password"
          autoCapitalize="none"
          autoCorrect={false}
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={50} />
        <Button
          label="Masuk"
          colorButton="#ff7c57"
          textColorButton="#FFF"
          onPress={onSubmit}
        />
        <Gap height={35} />
        <Button
          colorButton="#8D92A3"
          textColorButton="white"
          label="Buat Akun Baru"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
