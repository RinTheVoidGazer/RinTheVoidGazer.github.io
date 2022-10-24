const updateNonNestedCharacterValue = (
  objKey,
  newValue,
  setCombatants,
  charEditIndex
) => {
  // 👇️ passing function to setData method
  setCombatants((prevState) => {
    const newState = prevState.map((obj, index) => {
      // 👇️ if id equals 2, update country property
      if (charEditIndex === index) {
        return { ...obj, [objKey]: newValue }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    return newState
  })
}

export default updateNonNestedCharacterValue
