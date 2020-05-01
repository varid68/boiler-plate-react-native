import React from 'react'
import PropTypes from 'prop-types'
import { Text as RNText } from 'react-native'
import { FONT_SIZE } from '../constants/Sizes'
import { FONTS } from '../constants/Fonts'
import { BLACK_ALL } from '../constants/Colors'
import { keys } from 'lodash-es'

const propsType = {
  size: PropTypes.oneOf(keys(FONT_SIZE)),
  color: PropTypes.string,
  type: PropTypes.oneOf(keys(FONTS)),
  weight: PropTypes.number,
  line: PropTypes.number,
  centered: PropTypes.bool,
  style: PropTypes.any,
}

const propsDefault = {
  size: 'mini',
  color: BLACK_ALL,
  type: 'Exo',
  weight: 500,
  line: undefined,
  centered: false
}

const Text = (props) => {
  const {
    size,
    color,
    type,
    weight,
    line,
    centered,
    style,
    children,
  } = props

  return (
    <RNText
      numberOfLines={line}
      {...props}
      style={[
        {
          textAlign: centered ? 'center' : 'left',
          color,
          fontSize: FONT_SIZE[size] || FONT_SIZE[propsDefault.size],
          fontFamily: FONTS[type][weight] || FONTS[propsDefault.type][propsDefault.weight]
        },
        style
      ]}
    >
      {children}
    </RNText>
  )
}

Text.propTypes = propsType

Text.defaultProps = propsDefault

export default Text