import axios from 'axios'
import { getItemStorage } from 'actions/storage'


export const getListData = async (url, params = { limit: 100 }) => {
  const value = await getItemStorage('reduxPersist:loginReducer')

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      timeout: 8000,
      timeoutErrorMessage: 'Request Timeout',
      params,
      headers: {
        'Authorization': value.data.token,
        'X-Client': 'Mobile',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data)

          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response.data)
      })
  })
}

export const insertData = async (url, data) => {
  const value = await getItemStorage('reduxPersist:loginReducer')

  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      timeout: 8000,
      timeoutErrorMessage: 'Request Timeout',
      data,
      headers: {
        'Authorization': value.data.token,
        'X-Client': 'Mobile',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data.status_code === 200 || res.data.status_code === 201) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response.data)
      })
  })
}

export const editData = async (url, data) => {
  const value = await getItemStorage('reduxPersist:loginReducer')

  return new Promise((resolve, reject) => {
    axios({
      method: 'put',
      url,
      timeout: 8000,
      timeoutErrorMessage: 'Request Timeout',
      data,
      headers: {
        'Authorization': value.data.token,
        'X-Client': 'Mobile',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data.status_code === 200 || res.data.status_code === 201) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response.data)
      })
  })
}

export const deleteData = async (url) => {
  const value = await getItemStorage('reduxPersist:loginReducer')

  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url,
      timeout: 8000,
      timeoutErrorMessage: 'Request Timeout',
      headers: {
        'Authorization': value.data.token,
        'X-Client': 'Mobile',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.data.status_code === 200) {
          resolve(res.data.payload)
          return
        }

        reject(res.data)
      })
      .catch(e => {
        reject(e.response.data)
      })
  })
}
