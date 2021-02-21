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

export { isJSON, capitalize }
