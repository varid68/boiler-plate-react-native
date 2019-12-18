import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/storage'
import AppNavigator from './src/navigations/AppNavigator';
import NavigationService from './src/navigations/NavigationService'

export default function index() {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider >
  )
}
