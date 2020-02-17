import React, { useContext } from 'react'
import { View, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { LoginContext } from './LoginContext'
import { OSLO_GRAY, BLUE_2, WHITE } from '../../constants/Colors'
import Text from '../../components/Text'
import styles from './LoginStyles'
import { JUSTIFY_CENTER } from '../../constants/Styles'
import Feather from 'react-native-vector-icons/Feather'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <StatusBar translucent backgroundColor='transparent' />

      <View style={{ backgroundColor: WHITE }}>
        <Image
          style={styles.imgLogin}
          source={require('../../assets/images/login.png')} />

        <View style={styles.wrapper}>
          <Text
            centered
            color={OSLO_GRAY}
            size='xmini'
            style={{ marginVertical: 10 }}>
            Login instantly
          </Text>
          <View style={JUSTIFY_CENTER}>
            <TouchableOpacity style={[styles.instantlyWrap, { marginRight: 8 }]}>
              <Image
                style={styles.iconFbGoogle}
                source={require('../../assets/images/facebook-logo.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.instantlyWrap, { marginLeft: 8 }]}>
              <Image
                style={styles.iconFbGoogle}
                source={require('../../assets/images/google-logo.png')} />
            </TouchableOpacity>
          </View>

          <Text
            centered
            color={OSLO_GRAY}
            size='tiny'
            style={{ marginTop: 25, marginBottom: 15 }}>
            or login with email/mobile
            </Text>

          <Text
            color={OSLO_GRAY}
            size='tiny'>
            Username
            </Text>
          <TextInput
            style={styles.inputLogin} />

          <Text
            color={OSLO_GRAY}
            size='tiny'
            style={{ marginTop: 20 }}>
            Password
            </Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <TextInput
              style={styles.inputLogin2} />
            <TouchableOpacity style={styles.showPassword}>
              <Feather
                size={25}
                name='eye'
                color={OSLO_GRAY} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text
              size='tiny'
              style={{ textAlign: 'right', marginVertical: 15 }}
              color={BLUE_2}>
              Forgot password?
              </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnLogin}>
            <Text
              centered
              color={OSLO_GRAY}
              size='xmini'
              color={WHITE}>
              Login to my account
              </Text>
          </TouchableOpacity>

          {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text size='tiny'>Don’t have an account?</Text>
            <Text size='tiny' color='#0857ab'>Register now</Text>
          </View> */}
        </View>
      </View>
    </ScrollView>
  )
}


export default LoginView