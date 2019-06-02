/* eslint no-multi-spaces:0 */
export const CONTENT_TYPE_JSON  = 'application/json'
export const TYPE_AUTH          = 'Mobile'

export const IS_DEV             = false

const PRODUCTION                = 'https://emonica2.nusatek.id'
const APIDEV                    = 'https://emonica1.nusatek.id'

export const BASE_URL           = IS_DEV ? APIDEV : PRODUCTION
export const API_LOGIN          = `${BASE_URL}/v1/auth`
