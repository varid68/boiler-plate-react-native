import React, { useContext } from 'react'
import { Text } from 'react-native'
import { LoginContext } from './LoginContext'


const LoginView = ({ navigation }) => {
  const value = useContext(LoginContext)

  return (
    <Text>INI LOGIN</Text>
  )
}

export default LoginView