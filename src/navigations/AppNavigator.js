import { createStackNavigator, createAppContainer } from 'react-navigation'
import {
  WHITE, RED,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_FAMILY_BOLD
} from '../configs/styles'

import SplashPage from '../components/SplashScreen'
import HomePage from '../components/containers/Home'

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashPage },
  HomeScreen: { screen: HomePage }
}, {
  initialRouteName: 'SplashScreen',
  defaultNavigationOptions: {
    headerTintColor: WHITE,
    headerStyle: {
      backgroundColor: RED,
      height: 70,
    },
    headerBackTitle: null,
    headerTitleStyle: {
      fontFamily: DEFAULT_FONT_FAMILY_BOLD,
      fontSize: DEFAULT_FONT_SIZE,
    },
  },
  headerLayoutPreset: 'center'
})

export default createAppContainer(AppNavigator)
