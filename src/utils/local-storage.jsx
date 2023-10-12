const ACCESS_TOKEN = 'ACCESS_TOKEN'

export const addAccessToken = token => localStorage.setItem(ACCESS_TOKEN,token)
export const getAccessToken = token => localStorage.getItem(ACCESS_TOKEN,token)
export const removevAccessToken = token => localStorage.removeItem(ACCESS_TOKEN,token)