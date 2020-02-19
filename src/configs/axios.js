import axios from 'axios'
import { BASE_URL } from './configUrl'
import { getItemStorage } from '../actions/storage'


export const axiosGenerate = async () => {
  const value = await getItemStorage('user')

  axios.defaults.baseURL = BASE_URL
  axios.defaults.headers.common['Authorization'] = value == null ? '-' : value.token
  axios.defaults.headers.common['Content-Type'] = 'application/json'

  // axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJlNDdmMTYwLTcyZDYtNDE4ZS05Zjg3LWJlOTExMmFmODhhNyIsImV4cCI6MTU4NDE3MTkzNCwibGV2ZWwiOiJLZXR1YSBSVyIsIklkUGVuZHVkdWsiOiI2OWU2ZjVkYi1jMjk5LTQ1MjYtOWNmZS01NjY3MjExZTk0NWQiLCJpZF9wcm92aW5zaSI6IjMyIiwiaWRfa2FiX2tvdGEiOiIzMjczIiwiaWRfa2VjYW1hdGFuIjoiMzI3MzAxMCIsImlkX2tlbHVyYWhhbiI6IjMyNzMwMTAwMDEiLCJpZF9ydyI6ImE2YzY4MGVkLTlkYjktNDkxMi05MzE5LTAzMTMwMGQ4Njk1MyIsImlkX3J0IjoiODEyZmI1YzQtYTk0OC00OTA3LTlhNmQtNTExZDEwNWYzMjFkIn0.0EwKHNiWvYwYnwpCCmhc0In8QP80FMBoaVnGpNBAHFU`
  // axios.defaults.headers.common['Key'] = myAccessLogin.key
  // axios.defaults.headers.common['Client'] = 'rtrw-bandung.nusatek.id'
}
