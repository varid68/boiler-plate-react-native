import React, { createContext, useState } from 'react'
import { showToast } from '../../services/common'
import { insertData } from '../../actions'
import { storeMultiItemStorage, storeItemStorage } from '../../actions/storage'
import AsyncStorage from '@react-native-community/async-storage'

export const LoginContext = createContext()

function LoginContextProvider(prop) {
  const [fields, setFields] = useState({
    user_email: '',
    user_password: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(true)

  const _togglePassword = () => setShowPassword(!showPassword)

  const _onChangeFields = (name, value) => setFields({ ...fields, [name]: value })

  const _validate = () => {
    if (fields.user_email == '') {
      showToast('Username kosong')
      return false
    }

    if (fields.user_password == '') {
      showToast('password kosong')
      return false
    }

    _onSubmit()
  }

  const _onSubmit = () => {
    setLoading(true)

    insertData('/auth', fields)
      .then(res => {
        storeMultiItemStorage([['user', res], ['login', true]])
        prop.navigation.navigate('Kosongan')
      })
      .catch(e => showToast(e.description))
      .then(() => setLoading(false))
  }


  return (
    <LoginContext.Provider
      value={{
        fields,
        loading,
        showPassword,
        _onChangeFields,
        _validate,
        _togglePassword
      }}>
      {prop.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider