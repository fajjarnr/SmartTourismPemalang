import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components';
import {Success} from '../../assets';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Success />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>You have successfully</Text>
      <Text style={styles.subTitle}>Created a Account!!</Text>
      <Gap height={30} />
      <View style={styles.button}>
        <Button
          label="Find Destinations"
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
          colorButton="#FFC700"
          textColorButton="#020202"
        />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    paddingHorizontal: 80,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#020202',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
  },
});
