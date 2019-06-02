import { Platform, Dimensions } from 'react-native'

// SCREEN WIDTH & HEIGHT
export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

// Status Bar Height
//export const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (isIphoneX() ? 39 : 20) : 0

// Fonts WebView
export const WEB_DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : '-apple-system'

// Fonts
export const DEFAULT_FONT_FAMILY = Platform.OS === 'android' ? 'OpenSans-Regular' : 'System'
export const DEFAULT_FONT_FAMILY_BOLD = Platform.OS === 'android' ? 'OpenSans-Bold' : 'System'
export const FONT_FAMILY_BOLDER = Platform.OS === 'android' ? 'OpenSans-ExtraBold' : 'System'

export const FONT_SIZE_TINY             = 8
export const FONT_SIZE_SMALLER          = 10
export const FONT_SIZE_SMALL            = 12
export const DEFAULT_FONT_SIZE          = 14
export const FONT_SIZE_MEDIUM           = 16
export const FONT_SIZE_LARGE            = 18
export const FONT_SIZE_LARGER           = 20

// Colors
export const WHITE                      = '#ffffff'
export const WHITE_ALT                  = '#f5f5f5'
export const GRAY_ALT                   = '#eeeeee'
export const TRANSPARENT                = 'transparent'

export const RED                        = '#d3211f'
export const RED_TRANSPARENT            = '#d3211f33'
export const RED_TRANSPARENT2           = '#d3211f99'
export const MUSTARD                    = '#f5a623'
export const GREEN                      = '#4caf50'
export const MAROON                     = '#720d0d'

// Button Opacity
export const ACTIVE_OPACITY             = 0.7
export const OPACITY_MODAL              = 'rgba(0, 0, 0, 0.5)'
export const OPACITY_LIGHT              = 'rgba(0, 0, 0, 0.1)'

// default set
export const LAYOUT_PADDING = {
  flex: 1,
  paddingHorizontal: 15,
  paddingVertical: 15
}

// text styles
export const TEXT_BASE = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_LARGE = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_LARGE,
}

export const TEXT_MEDIUM = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_MEDIUM_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontSize: FONT_SIZE_MEDIUM,
}

export const TEXT_SMALL = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
}

export const TEXT_SMALL_RED = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALL,
  color: RED
}

export const TEXT_SMALL_GREEN = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontSize: FONT_SIZE_SMALL,
  color: GREEN
}

export const TEXT_SMALLER = {
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: FONT_SIZE_SMALLER
}

export const TEXT_BASE_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: DEFAULT_FONT_SIZE,
}

export const TEXT_LARGER_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  fontSize: FONT_SIZE_LARGER
}

export const TEXT_BOLDER = {
  fontFamily: FONT_FAMILY_BOLDER,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
}

export const TEXT_BOLD = {
  fontFamily: DEFAULT_FONT_FAMILY_BOLD,
  fontWeight: Platform.OS === 'ios' ? 'bold' : null,
}

export const ROW_SPACE_CENTER = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const ITEMS_CENTER = {
  alignItems: 'center',
  justifyContent: 'center'
}
