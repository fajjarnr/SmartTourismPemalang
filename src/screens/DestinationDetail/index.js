import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {Banner1, Banner2} from '../../assets';
import {Rating, Counter, Gap, Number, Button} from '../../components';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {getData} from '../../utils';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 330;

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

  const navTitleView = useRef(null);

  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = value => {
    console.log('value counter: ', value);
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * (totalItem * price);
    const total = totalPrice + driver + tax;

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
        driver,
        tax,
        total,
      },
      userProfile,
    };

    console.log('data CO:', data);
    navigation.navigate('PaymentSummary', data);
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.2}
        renderHeader={() => <Image source={Banner2} style={styles.image} />}
        renderForeground={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>{name}</Text>
            </View>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text
              style={styles.navTitle}
              numberOfLines={1}
              lineBreakMode="tail">
              {name}
            </Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={styles.counterContainer}>
            <View>
              <Rating number={rate} />
            </View>
            <View>
              <Counter onValueChange={onCounterChange} />
            </View>
          </View>
        </TriggeringView>

        <View style={styles.sectionLarge}>
          <Text style={styles.desc}>{description}</Text>
          <Gap height={16} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Alamat:</Text>
            <Text style={styles.desc}>{address}</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>No Telepon:</Text>
            <Text style={styles.desc}>{phone}</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Jam Operasional:</Text>
            <Text style={styles.desc}>{hours}</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Fasilitas:</Text>
            <Text style={styles.desc}>{facilities}</Text>
          </View>
        </View>

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

        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <Text style={styles.totalPrice}>Harga Total:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
            <Button
              label="Beli Tiket"
              //   onPress={onOrder}
              colorButton="#FFC700"
              textColorButton="#020202"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </ImageHeaderScrollView>
    </>
  );
};

export default DestinationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    textAlign: 'justify',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 115,
    fontFamily: 'Inter-Bold',
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    // minHeight: 200,
    padding: 20,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
