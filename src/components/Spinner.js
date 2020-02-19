import React from 'react'
import { ActivityIndicator } from 'react-native'
import { YELLOW } from '../constants/Colors'
import { ITEMS_CENTER } from '../constants/Styles'

/**
 * Animated spinner to indicate loading
 * @param {object=} style - Custom styles for the spinner
 * @param {boolean} [noDefaultStyle=false] - Bypasses the default styles
 */
export default class Spinner extends React.Component {
  setStyle() {
    if (!this.props.noDefaultStyle) {
      return {
        ...ITEMS_CENTER,
        height: 60
      }
    }
    return null
  }

  render() {
    return (
      <ActivityIndicator
        animating={true}
        style={[this.setStyle(), this.props.style]}
        size={this.props.size ? this.props.size : 'large'}
        color={this.props.color ? this.props.color : YELLOW}
      />
    )
  }
}
