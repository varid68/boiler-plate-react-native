import { createStackNavigator, createAppContainer } from 'react-navigation'
import {
  WHITE, RED,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_FAMILY_BOLD
} from '../configs/styles'

import SplashPage from '../components/SplashScreen'
import SuratPage from '../components/containers/Surat/List'
import SuratDetailPage from '../components/containers/Surat/Detail'
import SuratAddPage from '../components/containers/Surat/Create'
import SuratEditPage from '../components/containers/Surat/Update'

import HomePage from '../components/containers/Home'

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashPage },
  SuratScreen: { screen: SuratPage },
  SuratDetailScreen: { screen: SuratDetailPage },
  SuratAddScreen: { screen: SuratAddPage },
  SuratEditScreen: { screen: SuratEditPage },
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
