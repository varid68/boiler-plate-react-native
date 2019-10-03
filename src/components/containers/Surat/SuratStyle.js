import { StyleSheet } from 'react-native'
import { ALIGNING_ITEM_CENTER, RED } from '../.././../configs/styles'

export default StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    ...ALIGNING_ITEM_CENTER,
    backgroundColor: RED,
    height: 50,
    paddingHorizontal: 15
  }
})