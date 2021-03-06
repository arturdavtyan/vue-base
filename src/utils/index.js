export const isJSON = json => {
  try {
    JSON.parse(json)
    return true
  } catch (e) {
    return false
  }
}

export const capitalize = value => {
  const valueStr = String(value)

  if (!valueStr.length) return ''

  return valueStr
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const compose = (...fncs) => {
  if (!fncs.length) throw new Error('Compose function must have minimum 1 argument')

  if (fncs.some(e => !(e instanceof Function))) throw new Error('Each argument must be function')

  return fncs.reduce((acc, f) => {
    return (...args) => acc(f(...args))
  })
}

export const debounce = (fnc, ms) => {
  let _timeoutId = null

  return (...a) => {
    if (_timeoutId) clearTimeout(_timeoutId)

    _timeoutId = setTimeout(() => fnc(...a), ms)
  }
}
