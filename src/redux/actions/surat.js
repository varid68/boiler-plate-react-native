import axios from 'axios'
import { API_SURAT } from '../../configs/apiConfig'

export function getSuratAll(token, params) {
  return async () => {
    try {
      const res = await axios.get(`${API_SURAT}`, { headers: null, params })
      console.log(res)
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

export function getSuratOne(token, id) {
  return async () => {
    try {
      const res = await axios.get(`${API_SURAT}/${id}`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

export function submitSurat(token, data) {
  return async () => {
    try {
      const res = await axios.post(API_SURAT, data, { headers: null })
      console.log(res)
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

export function editSurat(token, data) {
  return async () => {
    try {
      const res = await axios.post(API_SURAT, data, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}

export function deleteSurat(token, id) {
  return async () => {
    try {
      const res = await axios.delete(`${API_SURAT}/${id}`, { headers: null })
      return res.data
    } catch (err) {
      if (err.response) return err.response.data
    }
  }
}