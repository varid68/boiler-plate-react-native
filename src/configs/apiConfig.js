/* eslint no-multi-spaces:0 */
export const CONTENT_TYPE_JSON  = 'application/json'
export const TYPE_AUTH          = 'Mobile'

export const IS_DEV             = true

const PRODUCTION                = 'https://emonica2.nusatek.id'
const APIDEV                    = 'http://office.e-monica.com:8000'

export const BASE_URL           = IS_DEV ? APIDEV : PRODUCTION
export const API_SURAT          = `${BASE_URL}/v1/surats`
