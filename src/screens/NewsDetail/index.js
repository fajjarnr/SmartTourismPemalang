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
import {Banner1} from '../../assets';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 220;

const NewsDetail = () => {
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
        renderHeader={() => <Image source={Banner1} style={styles.image} />}
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>Penulis :</Text>
            <Text style={styles.title}>Fajar Nur ROhman</Text>
          </View>
        </TriggeringView>
        <View style={styles.sectionLarge}>
          <Text style={styles.sectionContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            excepturi voluptas dolore in odit aliquam repellendus, reprehenderit
            labore animi! Odio, deserunt totam molestias obcaecati laboriosam
            quae alias consectetur nobis accusantium, necessitatibus sequi
            velit. Corrupti sunt ullam doloremque nemo, vitae incidunt, impedit
            iste saepe veritatis, atque rerum dignissimos? Architecto, nam ipsam
            natus vero sit assumenda deleniti deserunt consectetur quidem, nulla
            voluptatibus! Nihil minus incidunt magnam cupiditate repudiandae
            deserunt amet velit similique odit in atque aut ducimus quas minima
            dicta nesciunt ipsum possimus animi, dignissimos nemo temporibus
            harum reprehenderit autem tempore. Voluptatem cum unde quibusdam
            amet. Dignissimos pariatur quisquam reprehenderit impedit provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            excepturi voluptas dolore in odit aliquam repellendus, reprehenderit
            labore animi! Odio, deserunt totam molestias obcaecati laboriosam
            quae alias consectetur nobis accusantium, necessitatibus sequi
            velit. Corrupti sunt ullam doloremque nemo, vitae incidunt, impedit
            iste saepe veritatis, atque rerum dignissimos? Architecto, nam ipsam
            natus vero sit assumenda deleniti deserunt consectetur quidem, nulla
            voluptatibus! Nihil minus incidunt magnam cupiditate repudiandae
            deserunt amet velit similique odit in atque aut ducimus quas minima
            dicta nesciunt ipsum possimus animi, dignissimos nemo temporibus
            harum reprehenderit autem tempore. Voluptatem cum unde quibusdam
            amet. Dignissimos pariatur quisquam reprehenderit impedit provident.
          </Text>
        </View>
      </ImageHeaderScrollView>
    </>
  );
};

export default NewsDetail;

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
  sectionContent: {
    fontSize: 16,
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
});
