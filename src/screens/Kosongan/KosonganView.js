import React, { useContext } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from 'components/Text'
import SafeAreaView from 'react-native-safe-area-context'
import { OSLO_GRAY, RED, WHITE } from 'constants/Colors'

import { KosonganContext } from './KosonganContext'


const KosonganView = ({ navigation }) => {
  const value = useContext(KosonganContext)

  return (
    <View style={{
      padding: 15,
      flex: 1,
      justifyContent: 'center'
    }}>
      <TouchableOpacity
        onPress={value._logout}
        style={{
          backgroundColor: RED,
          paddingVertical: 10,
          borderRadius: 8
        }}>
        <Text
          centered
          color={OSLO_GRAY}
          size='xmini'
          color={WHITE}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default KosonganView
