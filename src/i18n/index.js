import I18n from 'react-native-i18n'
import en from './locales/en'
import id from './locales/idn'

I18n.fallbacks = true

I18n.translations = {
  en, id
}

export default I18n
