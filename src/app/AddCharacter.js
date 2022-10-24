import { Fab, Tooltip } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const AddCharacter = ({ setCombatants }) => {
  const handleAddCharacter = () => {
    let newCharacter = {
      name: "",
      statuses: [],
      curHp: 0,
      maxHp: 0,
      init: 0,
      ac: 0,
      isEnemy: false,
      isMainParty: false, // Flag that always excludes character from the Clear Combatants button
      keepAfterClear: false, // Flag to exclude character from the Clear Combatants button
      //   isActiveCombatant: false,
    }

    // 👇️ passing function to setData method
    setCombatants((prevState) => {
      let newCombatantsArray = [...prevState]
      newCombatantsArray.splice(prevState.length, 0, newCharacter)

      return newCombatantsArray
    })
  }

  return (
    <Tooltip title="Add Character">
      <Fab
        size="small"
        color="primary"
        aria-label="remove character"
        onClick={handleAddCharacter}
      >
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default AddCharacter
