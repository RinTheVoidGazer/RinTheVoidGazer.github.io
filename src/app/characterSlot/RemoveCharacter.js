import { Fab, Tooltip } from "@mui/material"
import RemoveIcon from "@mui/icons-material/Remove"

const RemoveCharacter = ({ charEditIndex, setCombatants }) => {
  const handleRemoveCharacter = () => {
    // 👇️ passing function to setData method
    setCombatants((prevState) => {
      let newCombatantsArray = [...prevState]
      newCombatantsArray.splice(charEditIndex, 1)

      return newCombatantsArray
    })
  }

  return (
    <Tooltip title="Remove Character">
      <Fab
        size="small"
        color="primary"
        aria-label="remove character"
        onClick={handleRemoveCharacter}
      >
        <RemoveIcon />
      </Fab>
    </Tooltip>
  )
}

export default RemoveCharacter
