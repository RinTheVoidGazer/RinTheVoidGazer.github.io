import { TextField } from "@mui/material"
import { useState } from "react"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"

const ACInput = ({ objKey, charEditIndex, characterValue, setCombatants }) => {
  // const [inputValue, setInputValue] = useState(characterValue)

  return (
    <TextField
      label="AC"
      variant="standard"
      type="number"
      size="small"
      value={characterValue}
      // onChange={(e) => setInputValue(e.target.value)}
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          parseInt(e.target.value),
          setCombatants,
          charEditIndex
        )
      }
    />
  )
}

export default ACInput
