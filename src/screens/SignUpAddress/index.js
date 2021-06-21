import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUpAddress = ({navigation}) => {
  //   const [form, setForm] = useForm({
  //     phoneNumber: '',
  //     address: '',
  //     houseNumber: '',
  //     city: 'Bandung',
  //   });

  //   const {registerReducer, photoReducer} = useSelector((state) => state);
  //   const dispatch = useDispatch();
  //   const onSubmit = () => {
  //     const data = {
  //       ...form,
  //       ...registerReducer,
  //     };
  //     dispatch(setLoading(true));
  //     dispatch(signUpAction(data, photoReducer, navigation));
  //   };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Data Diri"
          subTitle="Pastikan data valid"
          back
          onPress={() => navigation.goBack()}
        />
        <View style={styles.wrapper}>
          <TextInput
            label="No Telpon"
            inputLabel="Ketikan No Telpon"
            // value={form.phone}
            // onChangeText={value => setForm('phone', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Alamat"
            inputLabel="Ketikan Alamat"
            // value={form.address}
            // onChangeText={value => setForm('address', value)}
          />
          <Gap height={24} />
          <TextInput
            label="Kota"
            inputLabel="Ketikan Kota"
            // value={form.address}
            // onChangeText={value => setForm('address', value)}
          />
          <Gap height={24} />
          <View style={styles.button}>
            <Button
              label="Sign Up Now"
              onPress={() => navigation.navigate('SuccessSignUp')}
              colorButton="#FFC700"
              textColorButton="#020202"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
