import { TextField } from "@mui/material"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"

import "../../styles/ActiveCombatantEffect.css"

const NameInput = ({
  objKey,
  charEditIndex,
  characterValue,
  setCombatants,
}) => {
  //   const [inputValue, setInputValue] = useState(characterValue)

  return (
    <TextField
      label="Character Name"
      size="small"
      value={characterValue}
      //   onChange={(e) => setInputValue(e.target.value)}
      color="secondary"
      onChange={(e) =>
        updateNonNestedCharacterValue(
          objKey,
          e.target.value,
          setCombatants,
          charEditIndex
        )
      }
    />
  )
}

export default NameInput
