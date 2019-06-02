import { CONTENT_TYPE_JSON, TYPE_AUTH } from '../configs/apiConfigs'

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
  let headers = {
    'Content-Type': CONTENT_TYPE_JSON,
    'Authorization': token
  }
  return headers
}
