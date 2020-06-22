import React, { createContext, useState, useEffect } from 'react'
import { showToast } from 'services/common'
import { storeItemStorage } from 'actions/storage'
import { BASE_URL } from 'configs/configUrl'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import { LoginManager, AccessToken } from "react-native-fbsdk"
import axios from 'axios'

export const LoginContext = createContext()

function LoginContextProvider(props) {
  const [fields, setFields] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(true)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '326692148381-frosb9nil3pj26vjgfi2bldb18s530mh.apps.googleusercontent.com',
    })
  }, [])

  const _onLoginGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      await GoogleSignin.signIn()
      const token = await GoogleSignin.getTokens()

      console.log(token)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('cancelled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated')
      } else {
        console.log('Something went wrong', error.toString())
      }
    }
  }

  const _onLoginFacebook = async () => {
    const granted = await LoginManager.logInWithPermissions(['public_profile'])

    if (!granted.isCancelled) {
      AccessToken.getCurrentAccessToken()
        .then(token => console.log(token))
        .catch(e => console.log(e))
    }
  }

  const _togglePassword = () => setShowPassword(!showPassword)

  const _onChangeFields = (name, value) => setFields({ ...fields, [name]: value })

  const _validate = () => {
    if (fields.username == '') {
      showToast('Username kosong')
      return false
    }

    if (fields.password == '') {
      showToast('password kosong')
      return false
    }

    _onSubmit()
  }

  const _onSubmit = async () => {
    setLoading(true)

    try {
      const res = await axios.post(`${BASE_URL}/v1/auth`, fields)
      await storeItemStorage('user', res.data.payload)
      await storeItemStorage('login', true)
      props.navigation.replace('Kosongan')
    } catch (error) {
      if (error) {
        showToast(error.response.data.description)
      }
    }

    setLoading(false)
  }


  return (
    <LoginContext.Provider
      value={{
        fields,
        loading,
        showPassword,
        _onChangeFields,
        _validate,
        _togglePassword,
        _onLoginGoogle,
        _onLoginFacebook
      }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider