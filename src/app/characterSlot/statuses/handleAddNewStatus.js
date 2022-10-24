// Function for adding a new status
const handleAddNewStatus = (
  setCombatants,
  charEditIndex,
  objKey,
  newStatusName,
  newStatusDuration
) => {
  // 👇️ passing function to setData method
  setCombatants((prevState) => {
    const newState = prevState.map((obj, index) => {
      // 👇️ if id equals 2, update country property
      if (charEditIndex === index) {
        let newStatusArray = [...obj[objKey]]
        newStatusArray.splice(newStatusArray.length, 0, {
          name: newStatusName,
          duration: parseInt(newStatusDuration),
        })

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

export default handleAddNewStatus
