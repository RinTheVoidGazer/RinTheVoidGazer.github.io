// Status Delete Function
const handleStatusDeletion = (
  objKey,
  indexToRemove,
  setCombatants,
  charEditIndex
) => {
  // 👇️ passing function to setData method
  setCombatants((prevState) => {
    const newState = prevState.map((obj, index) => {
      // 👇️ if id equals 2, update country property
      if (charEditIndex === index) {
        let newStatusArray = [...obj[objKey]]
        newStatusArray.splice(indexToRemove, 1)

        return {
          ...obj,
          [objKey]: newStatusArray,
        }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    return newState
  })
}

export default handleStatusDeletion
