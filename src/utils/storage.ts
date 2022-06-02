const _getLocalStore = () =>
  typeof window !== "undefined" && window.localStorage

const _getSessionStore = () =>
  typeof window !== "undefined" && window.sessionStorage

const _safeParse = (s) => {
  try {
    return JSON.parse(s)
  } catch (e) {
    return null
  }
}

export const writeLocalStorage = (key: any, value: any) => {
  const ls = _getLocalStore()
  return ls && ls.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
  const ls = _getLocalStore()
  const v = ls && ls.getItem(key)
  return v && _safeParse(v)
}

export const writeSessionStorage = (key: any, value: any) => {
  const ss = _getSessionStore()
  return ss && ss.setItem(key, JSON.stringify(value))
}

export const getSessionStorage = (key: any) => {
  const ss = _getSessionStore()
  return ss && _safeParse(ss.getItem(key))
}
