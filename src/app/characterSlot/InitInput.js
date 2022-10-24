import { TextField } from "@mui/material"
import { useState } from "react"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"

const InitInput = ({
  objKey,
  charEditIndex,
  characterValue,
  setCombatants,
}) => {
  const [inputValue, setInputValue] = useState(characterValue)

  return (
    <TextField
      label="Initiative"
      variant="standard"
      type="number"
      size="small"
      value={characterValue}
      //   onChange={(e) => setInputValue(e.target.value)}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          parseInt(e.target.value),
          setCombatants,
          charEditIndex
        )
      }
      onBlur={() => {
        setCombatants((prevState) => {
          let sortedCombatants = [...prevState]
          sortedCombatants.sort((a, b) => b.init - a.init)

          return sortedCombatants
        })
      }}
    />
  )
}

export default InitInput
