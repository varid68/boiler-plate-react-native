import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import { RED, WHITE, BLACK } from '../../../../configs/styles'
import PopupMenu from '../../../presesentationals/PopupMenu'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const Header = ({ goBack, onPopupEvent, popup }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
  }, [popup])

  const onClickPopup = () => setVisible(!visible)

  renderPopup = () => (
    <View style={styles.popupWrapper}>
      <TouchableOpacity
        style={styles.popup}
        onPress={onPopupEvent.bind(null, 'itemSelected', 0)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popup}
        onPress={onPopupEvent.bind(null, 'itemSelected', 1)}>
        <Text>Hapus</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor={RED} barStyle="light-content" />
      <View style={styles.indexContainer}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.icon}>
          <MaterialIcon name="arrow-back" color={WHITE} style={{ fontSize: 23 }} />
        </TouchableOpacity>
        <Text style={{ color: WHITE, flex: 1 }}>List Surat Detail</Text>
        {Platform.OS === 'ios' ?
          <TouchableOpacity
            onPress={onClickPopup}
            style={styles.icon}>
            <MaterialIcon name="more-vert" color={WHITE} style={{ fontSize: 23 }} />
          </TouchableOpacity> :
          <PopupMenu
            style={styles.icon}
            icon="more-vert"
            size={23}
            color={WHITE}
            actions={['Edit', 'Hapus']}
            onPress={onPopupEvent} />
        }
      </View>
      {visible && renderPopup()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 99
  },
  indexContainer: {
    backgroundColor: RED,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15
  },
  icon: {
    justifyContent: 'center',
    width: 50,
    height: 50
  },
  popupWrapper: {
    position: 'absolute',
    top: 60,
    right: 0,
    borderWidth: 0,
    shadowColor: BLACK,
    backgroundColor: WHITE,
    shadowOpacity: .5,
    shadowOffset: {
      height: 3,
      width: 0
    },
    elevation: 2
  },
  popup: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 50,
    backgroundColor: WHITE
  }
})

export default Header