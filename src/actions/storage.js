import AsyncStorage from "@react-native-community/async-storage"


export const getItemStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)

    return JSON.parse(value)
  } catch (e) {
    return false
  }
}

export const getAllItemStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const items = await AsyncStorage.multiGet(keys)

    return items
  } catch (e) {
    return false
  }
}

export const storeItemStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    return false
  }
}

export const storeMultiItemStorage = async (items) => {
  try {
    items.map(val => {
      val.map((e, i) => {
        if (i == 1 && typeof (val[1]) != 'string') val[1] = JSON.stringify(val[1])
      })
    })

    await AsyncStorage.multiSet(items)
  } catch (e) {
    return false
  }
}

export const removeItemStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return true
  }
  catch (e) {
    return false
  }
}

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    return false
  }
}

