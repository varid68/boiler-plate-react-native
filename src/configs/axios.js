import axios from "axios";
import { apiUrl } from "./configUrl";
import AsyncStorage from '@react-native-community/async-storage';


export const GetToken = async () => {
  const token = await getItemValue("token")
  const key = await getItemValue("key")
  const client = await getItemValue("client")
  const userInfo = await getItemValue("user_info")

  // console.log("user info", JSON.parse(userInfo))
  return {
    token,
    key,
    client,
    userInfo: JSON.parse(userInfo)
  }
}
export const axiosGenerate = async () => {
  const myAccessLogin = await GetToken()

  axios.defaults.baseURL = apiUrl
  axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJlNDdmMTYwLTcyZDYtNDE4ZS05Zjg3LWJlOTExMmFmODhhNyIsImV4cCI6MTU4NDE3MTkzNCwibGV2ZWwiOiJLZXR1YSBSVyIsIklkUGVuZHVkdWsiOiI2OWU2ZjVkYi1jMjk5LTQ1MjYtOWNmZS01NjY3MjExZTk0NWQiLCJpZF9wcm92aW5zaSI6IjMyIiwiaWRfa2FiX2tvdGEiOiIzMjczIiwiaWRfa2VjYW1hdGFuIjoiMzI3MzAxMCIsImlkX2tlbHVyYWhhbiI6IjMyNzMwMTAwMDEiLCJpZF9ydyI6ImE2YzY4MGVkLTlkYjktNDkxMi05MzE5LTAzMTMwMGQ4Njk1MyIsImlkX3J0IjoiODEyZmI1YzQtYTk0OC00OTA3LTlhNmQtNTExZDEwNWYzMjFkIn0.0EwKHNiWvYwYnwpCCmhc0In8QP80FMBoaVnGpNBAHFU`
  // axios.defaults.headers.common['Authorization'] = `Bearer ${myAccessLogin.token}`
  // axios.defaults.headers.common['Key'] = myAccessLogin.key
  axios.defaults.headers.common['Key'] = '99eb37b6a6062bc737b6a60kkss'
  axios.defaults.headers.common['Client'] = "rtrw-bandung.nusatek.id"
  axios.defaults.headers.common['Context-Type'] = "application/json"
}

export const saveToken = async ({ token, key, client, user }) => {
  await addItemValue("token", token)
  await addItemValue("key", key)
  await addItemValue('client', client)
  await addItemValue("user_info", JSON.stringify(user))
}
export const removeToken = async () => {
  await removeItemValue("token")
  await removeItemValue("key")
  await removeItemValue("client")
  await removeItemValue("user_info")
}

export const converDateToTimetamps = date => {
  return Math.round(new Date(date).getTime() / 1000);
};

const removeItemValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch (exception) {
    return false;
  }
}

const addItemValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  }
  catch (exception) {
    return false;
  }
}


const getItemValue = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  }
  catch (exception) {
    return false;
  }
}
