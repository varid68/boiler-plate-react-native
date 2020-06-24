import React, { Fragment } from 'react'
import { View, ImageBackground, StatusBar } from 'react-native'
import Text from 'components/Text'
import Swiper from 'react-native-swiper'
import { StackActions } from '@react-navigation/native'
import { WP100, HP100, WP50, WP40, WP80, WP5, WP25 } from 'constants/Sizes'
import { OPACITY_LIGHT, LUCKY_POINT, WHITE } from 'constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { storeItemStorage } from 'actions/storage'


const Walkthrough = ({ navigation }) => {

  const _setFirstInstall = async () => {
    await storeItemStorage('first_install', false)
    navigation.dispatch(StackActions.replace('Login'))
  }

  return (
    <Fragment>
      <StatusBar translucent backgroundColor={OPACITY_LIGHT} />
      <Swiper loop={false}>
        <ImageBackground
          style={{
            width: WP100,
            height: HP100
          }}
          source={require('images/slide1.png')}>
          <View style={{
            position: 'absolute',
            bottom: WP50,
            width: WP100,
            paddingHorizontal: 20
          }}>
            <Text centered size='massive' color={LUCKY_POINT} weight={500}>Lorem Ipsum Sir</Text>
            <Text centered weight={400} color={LUCKY_POINT}>Lorem ipsum dolor sit amet consectetur,  elit. quaerat commodi quidem a?</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={{
            width: WP100,
            height: HP100
          }}
          source={require('images/slide2.png')}>
          <View style={{
            position: 'absolute',
            bottom: WP40,
            width: WP100,
            paddingHorizontal: 20
          }}>
            <Text centered size='massive' color={LUCKY_POINT} weight={500}>Lorem Ipsum Sir</Text>
            <Text centered weight={400} color={LUCKY_POINT}>Lorem ipsum dolor sit amet consectetur,  elit. quaerat commodi quidem a?</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={{
            width: WP100,
            height: HP100
          }}
          source={require('images/slide3.png')}>
          <View style={{
            position: 'absolute',
            bottom: WP25,
            width: WP100,
            paddingHorizontal: 20
          }}>
            <Text centered size='massive' color={LUCKY_POINT} weight={500}>Lorem Ipsum Sir</Text>
            <Text centered weight={400} color={LUCKY_POINT}>Lorem ipsum dolor sit amet consectetur,  elit. quaerat commodi quidem a?</Text>
            <LinearGradient
              style={{
                paddingVertical: 10,
                borderRadius: 30,
                width: WP80,
                marginTop: WP5,
                marginLeft: WP5
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#a568fa', '#a568fa', '#0fd0fb', '#00dafb']}>
              <TouchableOpacity onPress={_setFirstInstall}>
                <Text centered color={WHITE}>Get Started</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Swiper>
    </Fragment>
  )
}

export default Walkthrough