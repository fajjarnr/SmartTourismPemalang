import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Button, Counter, Gap, Number, Rating} from '../../components';
import {getData} from '../../utils';

const DestinationDetail = ({navigation, route}) => {
  const {
    id,
    name,
    description,
    image,
    rate,
    price,
    facilities,
    hours,
    address,
    phone,
    latitude,
    longitude,
  } = route.params;

  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const tax = (10 / 100) * (totalItem * price);
    const total = totalPrice + tax;

    const data = {
      item: {
        id,
        name,
        price,
        image,
      },
      transaction: {
        totalItem,
        totalPrice,
        tax,
        total,
      },
      userProfile,
    };

    console.log('data Checkout:', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="dark-content"
        />
        <ImageBackground source={{uri: image}} style={styles.background} />

        <View style={styles.content}>
          <View style={styles.counterSection}>
            <View>
              <Text style={styles.title}>{name}</Text>
              {rate !== null && <Rating number={rate} />}
            </View>
            {price !== null && (
              <View>
                <Counter onValueChange={onCounterChange} />
              </View>
            )}
          </View>
          <Text style={styles.desc}>{description}</Text>
          {address !== null && (
            <View>
              <Gap height={16} />
              <Text style={styles.subTitle}>Alamat:</Text>
              <Gap height={4} />
              <Text style={styles.desc}>{address}</Text>
            </View>
          )}
          {phone !== null && (
            <View>
              <Gap height={16} />
              <Text style={styles.subTitle}>No Telepon:</Text>
              <Gap height={4} />
              <Text style={styles.desc}>{phone}</Text>
            </View>
          )}
          {hours !== null && (
            <View>
              <Gap height={16} />
              <Text style={styles.subTitle}>Jam Operasional:</Text>
              <Text style={styles.desc}>0{hours}:00 WIB</Text>
            </View>
          )}
          {facilities !== null && (
            <View>
              <Gap height={16} />
              <Text style={styles.subTitle}>Fasilitas:</Text>
              <Gap height={4} />
              <Text style={styles.desc}>{facilities}</Text>
            </View>
          )}
        </View>

        {latitude !== null && (
          <View style={styles.maps}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={{flex: 1}}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
                title={'Lokasi'}
                description={name}
              />
            </MapView>
          </View>
        )}

        {price !== null && (
          <View style={styles.footer}>
            <View style={styles.footerContainer}>
              <Text style={styles.totalPrice}>Harga Total:</Text>
              <Number number={totalItem * price} style={styles.priceTotal} />
            </View>
            <View style={styles.button}>
              <Button
                label="Beli Tiket"
                onPress={onOrder}
                colorButton="#ff7c57"
                textColorButton="#FFFFFF"
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DestinationDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  background: {height: 330},
  iconBack: {paddingLeft: 16, paddingTop: 24},
  content: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 26,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#202020',
  },
  subTitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8D92A3',
    textAlign: 'auto',
  },
  counterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
  },
  maps: {
    padding: 20,
    backgroundColor: 'white',
    height: 250,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 26,
    alignItems: 'center',
    paddingBottom: 18,
  },
  totalPrice: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
  priceTotal: {
    fontFamily: 'Inter-Regular',
    fontSize: 20,
  },
  footerContainer: {
    flex: 1,
  },
  button: {
    width: 163,
    height: 45,
  },
});
