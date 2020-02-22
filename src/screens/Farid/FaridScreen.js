import React from 'react'
import FaridView from './FaridView'
import FaridContextProvider from './FaridContext'


const FaridScreen = ({ navigation }) => {
  return (
    <FaridContextProvider>
      <FaridView navigation={navigation} />
    </FaridContextProvider>
  )
}

export default FaridScreen
