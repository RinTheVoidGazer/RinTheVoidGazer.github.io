const parseObjKeys = (objKey) => {
  const wipTitle = objKey.replace(/([A-Z])/g, " $1")
  const finalTitle = wipTitle.charAt(0).toUpperCase() + wipTitle.slice(1)

  return finalTitle
}

export default parseObjKeys
