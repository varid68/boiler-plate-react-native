
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/Login/LoginScreen'
import KosonganScreen from '../screens/kosongan/LoginScreen'


const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Kosongan" component={KosonganScreen} />
    </Stack.Navigator>
  )
}

export default App