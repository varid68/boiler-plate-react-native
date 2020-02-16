import axios from 'axios'
import { axiosGenerate } from '../configs/axios'

axiosGenerate()

export const GetListData = strUrl => {
  return new Promise((resolve, reject) => {
    axios
      .get(strUrl)
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data)

          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response)
      })
  })
}

export const insertData = (strUrl, body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(strUrl, body)
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response)
      })
  })
}

export const EditData = (strUrl, body) => {
  return new Promise((resolve, reject) => {
    axios
      .put(strUrl, body)
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response)
      })
  })
}

export const DeleteData = strUrl => {
  return new Promise((resolve, reject) => {
    axios
      .delete(strUrl)
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response)
      })
  })
}
