import { useEffect } from 'react'
import { ToastAndroid, BackHandler } from 'react-native'

// FORMAT RUPIAH
export function setCurrency(bilangan) {
  const reverse = bilangan.toString().split('').reverse().join('')
  let ribuan = reverse.match(/\d{1,3}/g)
  ribuan = ribuan.join(',').split('').reverse().join('')

  return ribuan
}

// TAMPILKAN TOAST
export function showToast(text, option = null) {
  const duration = option == null ? ToastAndroid.LONG : ToastAndroid.SHORT
  ToastAndroid.showWithGravityAndOffset(
    text,
    duration,
    ToastAndroid.BOTTOM,
    25, 50,
  )
}

// KAPITALISASI TIAP KATA
export function capitalize(text) {
  const result = text.toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')

  return result
}

// 
export function addRemoveListenerBack(props) {
  let backHandler = ''
  useEffect(() => {
    backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      props.navigation.goBack()
      return true
    })

    return () => {
      backHandler.remove()
    }
  }, [])
}
