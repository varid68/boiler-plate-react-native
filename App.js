import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigations/AppNavigator'
import { Provider as StoreProvider } from 'react-redux'
import store from '@redux/store'


export default function index() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </StoreProvider>
  )
}
