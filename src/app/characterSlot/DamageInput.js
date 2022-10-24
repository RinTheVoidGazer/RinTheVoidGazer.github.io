import { TextField } from "@mui/material"
import { useState } from "react"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"

const DamageInput = ({
  objKey,
  charEditIndex,
  characterValue,
  setCombatants,
  maxHp,
}) => {
  const [inputValue, setInputValue] = useState(0)

  return (
    <TextField
      label="Damage"
      variant="filled"
      type="number"
      size="small"
      style={{ width: "80px" }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          characterValue - e.target.value > maxHp
            ? maxHp
            : characterValue - e.target.value,
          setCombatants,
          charEditIndex
        )
      }
    />
  )
}

export default DamageInput
