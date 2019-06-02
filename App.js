import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/storage'
import AppNavigator from './src/navigations/AppNavigator'
import NavigationService from './src/navigations/NavigationService'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </Provider>
    )
  }
}
