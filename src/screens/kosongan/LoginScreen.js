import React from 'react'
import LoginView from './LoginView'
import LoginContextProvider from './LoginContext'


const LoginScreen = ({ navigation }) => {
  return (
    <LoginContextProvider>
      <LoginView navigation={navigation} />
    </LoginContextProvider>
  )
}

export default LoginScreen