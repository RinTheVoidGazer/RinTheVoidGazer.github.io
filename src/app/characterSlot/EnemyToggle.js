// MUI
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"
import { FormControl } from "@mui/material"

const EnemyToggle = ({
  objKey,
  charEditIndex,
  characterValue,
  setCombatants,
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={characterValue}
            onChange={(e) =>
              updateNonNestedCharacterValue(
                objKey,
                e.target.checked,
                setCombatants,
                charEditIndex
              )
            }
          />
        }
        label="Enemy"
      />
    </FormGroup>
  )
}

export default EnemyToggle
