import React, { Component } from 'react'
import {
  Platform, StyleSheet, Text, View, TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setStatus } from '../../../redux/actions/home'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,
      Cmd+D or shake for dev menu`,
  android:
    'Double tap R on your keyboard to reload,\n'
    + 'Shake or press menu button for dev menu'
})

class Homepage extends Component {
  componentDidMount() {

  }

  render() {
    // eslint-disable-next-line
    const { status } = this.props.homeReducer
    const { actions } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        {status && <Text style={styles.instructions}>{instructions}</Text>}
        <TouchableOpacity onPress={() => actions.setStatus()}>
          <Text>Toggle Status</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  homeReducer: state.homeReducer
})

const mapDispatchStateToProps = dispatch => ({
  actions: bindActionCreators(
    { setStatus }, dispatch
  )
})

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(Homepage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
