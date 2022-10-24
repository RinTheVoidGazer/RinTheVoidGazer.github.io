import { useState } from "react"

// MUI
import { Button } from "@mui/material"
import PopoverComp from "../../reusableComps/PopoverComp"
import CombatantDisplay from "./CombatantDisplay"

const CharacterDataParse = ({ combatants }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <>
      <PopoverComp
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        {combatants.map((combatant) => {
          return <CombatantDisplay info={combatant}></CombatantDisplay>
        })}
      </PopoverComp>

      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        View Combatants
      </Button>
    </>
  )
}

export default CharacterDataParse
