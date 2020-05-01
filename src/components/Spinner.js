import React from 'react'
import { ActivityIndicator } from 'react-native'
import { YELLOW } from '../constants/Colors'
import { ITEMS_CENTER } from '../constants/Styles'
import PropTypes from 'prop-types'

const propsTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

const propsDefault = {
  size: 'large',
  color: YELLOW
}

const Spinner = ({ size, color }) => (
  <ActivityIndicator
    animating={true}
    style={{ ...ITEMS_CENTER, height: 50 }}
    size={size}
    color={color} />
)

Spinner.propTypes = propsTypes

Spinner.defaultProps = propsDefault

export default Spinner
