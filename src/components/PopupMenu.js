import React, { Component } from 'react'
import { UIManager, findNodeHandle, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class PopupMenu extends Component {
  state = { icon: null }

  onError() {
    console.log('Popup Error')
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      )
    }
  }

  onRef = icon => !this.state.icon && this.setState({ icon })

  render() {
    const { icon, size, color, style } = this.props

    return (
      <TouchableOpacity style={style} onPress={this.onPress}>
        <Icon
          name={icon}
          size={size}
          color={color}
          ref={this.onRef} />
      </TouchableOpacity>
    )
  }

}