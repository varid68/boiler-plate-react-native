import { StyleSheet } from 'react-native'
import { GHOST, YELLOW_25 } from '~/constants/Colors'
import { WP100, WP50, HP100 } from '~/constants/Sizes'
import { JUSTIFY_CENTER, ITEMS_CENTER } from '~/constants/Styles'


export default StyleSheet.create({
  imgLogin: {
    width: WP100,
    height: 0.52 * HP100
  },
  wrapper: {
    height: HP100 - (0.52 * HP100),
    paddingHorizontal: 20
  },
  instantlyWrap: {
    ...JUSTIFY_CENTER,
    borderColor: GHOST,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    width: WP50 - 30
  },
  iconFbGoogle: {
    resizeMode: 'contain',
    height: 20
  },
  inputLogin: {
    paddingLeft: 10,
    height: 40,
    borderWidth: 1,
    borderColor: GHOST,
    borderRadius: 5,
    marginTop: 5
  },
  inputLogin2: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: GHOST,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginTop: 5
  },
  showPassword: {
    ...ITEMS_CENTER,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: GHOST,
    width: 40,
    height: 40,
    marginTop: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  btnLogin: {
    backgroundColor: YELLOW_25,
    borderRadius: 5,
    paddingVertical: 10
  }
})