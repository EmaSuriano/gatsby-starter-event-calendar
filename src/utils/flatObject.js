const flatObject = (object, prefix = '') =>
  Object.keys(object).reduce((acc, curr) => {
    const value = object[curr]
    const key = prefix ? `${prefix}-${curr}` : curr
    const flatValue = typeof value === 'object' ? flatObject(value, key) : value

    return {
      ...acc,
      ...(typeof flatValue === 'object' ? flatValue : { [key]: flatValue }),
    }
  }, {})

export default flatObject
