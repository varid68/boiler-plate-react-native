import React, { useContext } from 'react'
import { View } from 'react-native'
import Text from '../../components/Text'
import SafeAreaView from 'react-native-safe-area-view'
import { FaridContext } from './FaridContext'


const FaridView = ({ navigation }) => {
  const value = useContext(FaridContext)

  return (
    <Text>INI PAGE Farid</Text>
  )
}

export default FaridView
