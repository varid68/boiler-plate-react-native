import React, { useContext } from 'react'
import { View, Image, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { LoginContext } from './LoginContext'
import { OSLO_GRAY, WHITE, BLACK_ALL, BLACK } from '../../constants/Colors'
import Text from '../../components/Text'
import styles from './LoginStyles'
import { ALIGNING_ITEM_CENTER } from '../../constants/Styles'
import Feather from 'react-native-vector-icons/Feather'
import Spinner from '../../components/Spinner'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <StatusBar backgroundColor={BLACK_ALL} />

      <View style={{ backgroundColor: WHITE }}>
        <Image
          style={styles.imgLogin}
          source={require('../../assets/images/login.png')} />

        <View style={styles.wrapper}>
          <View style={ALIGNING_ITEM_CENTER}>
            <Text style={{ flex: 1 }}>Login instantly with</Text>
            <TouchableOpacity>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../../assets/images/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../../assets/images/google-plus.png')} />
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
            Username / Email
            </Text>
          <TextInput
            onChangeText={text => value._onChangeFields('user_email', text)}
            value={value.fields.user_email}
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
              secureTextEntry={value.showPassword}
              onChangeText={text => value._onChangeFields('user_password', text)}
              value={value.fields.user_password}
              style={styles.inputLogin2} />
            <TouchableOpacity
              onPress={value._togglePassword}
              style={styles.showPassword}>
              <Feather
                size={25}
                name='eye'
                color={OSLO_GRAY} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text
              weight={700}
              size='tiny'
              style={{ textAlign: 'right', marginVertical: 15 }}
              color={BLACK_ALL}>
              Forgot password?
              </Text>
          </TouchableOpacity>

          {
            value.loading ?
              <View>
                <Spinner />
                <Text centered>Please wait..</Text>
              </View>

              :
              <TouchableOpacity
                onPress={value._validate}
                style={styles.btnLogin}>
                <Text
                  centered
                  color={OSLO_GRAY}
                  size='xmini'
                  color={BLACK}>
                  Login to my account
              </Text>
              </TouchableOpacity>
          }

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