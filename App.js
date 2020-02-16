import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigations/AppNavigator'


export default function index() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
