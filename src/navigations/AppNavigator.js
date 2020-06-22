
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from 'screens/Login/LoginScreen'
import SplashScreen from 'screens/SplashScreen'
import WalkthroughScreen from 'screens/Walkthrough'
import KosonganScreen from 'screens/Kosongan/KosonganScreen'


const Stack = createStackNavigator()

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Kosongan" component={KosonganScreen} />
    </Stack.Navigator>
  )
}

export default App