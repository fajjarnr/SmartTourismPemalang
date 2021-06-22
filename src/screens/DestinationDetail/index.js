import React, {useRef} from 'react';
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

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 220;

const DestinationDetail = ({navigation}) => {
  const navTitleView = useRef(null);

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
        renderHeader={() => <Image source={Banner2} style={styles.image} />}
        renderForeground={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.titleContainer}>
              <Text style={styles.imageTitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
            </View>
          </View>
        )}
        renderFixedForeground={() => (
          <Animatable.View style={styles.navTitleView} ref={navTitleView}>
            <Text
              style={styles.navTitle}
              numberOfLines={1}
              lineBreakMode="tail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.current.fadeInUp(200)}
          onDisplay={() => navTitleView.current.fadeOut(100)}>
          <View style={styles.counterContainer}>
            <View>
              <Rating />
            </View>
            <View>{/* <Counter /> */}</View>
          </View>
        </TriggeringView>

        <View style={styles.sectionLarge}>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            excepturi voluptas dolore in odit aliquam repellendus, reprehenderit
            labore animi! Odio, deserunt totam molestias obcaecati laboriosam
            quae alias consectetur nobis accusantium, necessitatibus sequi
            velit. Corrupti sunt ullam doloremque nemo, vitae incidunt, impedit
            iste saepe veritatis, atque rerum dignissimos? Architecto, nam ipsam
            natus vero sit assumenda deleniti deserunt consectetur quidem, nulla
            voluptatibus!
          </Text>
          <Gap height={16} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Alamat:</Text>
            <Text style={styles.desc}>Pemalang</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>No Telepon:</Text>
            <Text style={styles.desc}>09877878</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Jam Operasional:</Text>
            <Text style={styles.desc}>08:00 - 17:00</Text>
          </View>
          <Gap height={6} />
          <View style={styles.rowContainer}>
            <Text style={styles.subTitle}>Fasilitas:</Text>
            <Text style={styles.desc}>parkir</Text>
          </View>
        </View>

        <View style={styles.maps}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex: 1}}
            region={{
              latitude: -6.89032304565653,
              longitude: 109.38062960466476,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <Text style={styles.totalPrice}>Harga Total:</Text>
            {/* <Number style={styles.priceTotal} /> */}
            <Text>20.000</Text>
            {/* <Text>IDR {totalItem * price}</Text> */}
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
    marginTop: '20%',
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
    minHeight: 300,
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
