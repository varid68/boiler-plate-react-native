import React, { useContext } from 'react'
import { View, TouchableOpacity, SafeAreaView } from 'react-native'
import Text from 'components/Text'
import { OSLO_GRAY, RED, WHITE } from 'constants/Colors'

import { KosonganContext } from './KosonganContext'
import { JUSTIFY_CENTER } from 'constants/Styles'


const KosonganView = ({ navigation }) => {
  const value = useContext(KosonganContext)

  return (
    <SafeAreaView>
      <View style={{
        ...JUSTIFY_CENTER,
        padding: 15
      }}>
        <TouchableOpacity
          onPress={value._addCounter}
          style={{
            flex: 1,
            backgroundColor: RED,
            paddingVertical: 10,
            borderRadius: 8
          }}>
          <Text
            centered
            color={OSLO_GRAY}
            size='xmini'
            color={WHITE}>
            TAMBAH
        </Text>
        </TouchableOpacity>

        <Text centered style={{ flex: .5 }}>{value.counter}</Text>

        <TouchableOpacity
          onPress={value._substractCounter}
          style={{
            flex: 1,
            backgroundColor: RED,
            paddingVertical: 10,
            borderRadius: 8
          }}>
          <Text
            centered
            color={OSLO_GRAY}
            size='xmini'
            color={WHITE}>
            KURANG
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default KosonganView
