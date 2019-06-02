import { CONTENT_TYPE_JSON, TYPE_AUTH } from '../configs/apiConfig'

export const GET = 'get'
export const POST = 'post'
export const PUT = 'put'
export const DELETE = 'delete'
export const PATCH = 'patch'

export const defaultHeader = {
  'Content-Type': CONTENT_TYPE_JSON,
  'X-Client': TYPE_AUTH
}

export function headerAuth(token) {
  const headers = {
    'Content-Type': CONTENT_TYPE_JSON,
    // eslint-disable-next-line
    'Authorization': token
  }
  return headers
}
