import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  // const [form, setForm] = useForm({
  //   email: '',
  //   password: '',
  // });

  // const dispatch = useDispatch();

  // const onSubmit = () => {
  //   console.log('form: ', form);
  //   dispatch(signInAction(form, navigation));
  // };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Welcome Back" />
      <View style={styles.wrapper}>
        <TextInput
          label="Email Address"
          inputLabel="Masukkan alamat email"
          // value={form.email}
          // onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          inputLabel="Masukkan password"
          // value={form.password}
          // onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button
          label="Sign In"
          colorButton="#FFC700"
          textColorButton="#020202"
          // onPress={onSubmit}
        />
        <Gap height={12} />
        <Button
          colorButton="#8D92A3"
          textColorButton="white"
          label="Create New Account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 26,
    backgroundColor: 'white',
    marginTop: 24,
    flex: 1,
  },
});
