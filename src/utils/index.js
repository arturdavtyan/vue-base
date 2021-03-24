const isJSON = json => {
  try {
    JSON.parse(json)
    return true
  } catch (e) {
    return false
  }
}

const capitalize = value => {
  const valueStr = String(value)

  return !valueStr.length ? '' : valueStr
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const compose = (...fncs) => {
  if (!fncs.length) return () => { throw new Error('Compose function must have minimum 1 argument') }

  if (fncs.some(e => typeof e !== 'function')) return () => { throw new Error('Each argument must be function') }

  return fncs.reduce((acc, f) => {
    return (...args) => acc(f(...args))
  })
}

export { isJSON, capitalize, compose }
