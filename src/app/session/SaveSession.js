import { useState } from "react"

// MUI
import SaveIcon from "@mui/icons-material/Upload"
import { Button, TextField, Typography } from "@mui/material"

// Functions
import handleSaveSession from "../functions/handleSaveSession"
import PopoverComp from "../reusableComps/PopoverComp"

const SaveSession = ({ combatants, turnCount, activeCombatant }) => {
  const [sessionName, setSessionName] = useState("")

  const [anchorEl, setAnchorEl] = useState(null)

  const handleSaveIconClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const handleSaveSessionClick = () => {
    let sessionData = {
      sessionName: sessionName,
      turnCount: turnCount,
      activeCombatant: activeCombatant,
      characterData: combatants,
    }

    handleSaveSession(sessionData)
  }

  return (
    <>
      <SaveIcon onClick={handleSaveIconClick} />

      <PopoverComp
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography>Enter a Session Name:</Typography>

          <TextField onBlur={(e) => setSessionName(e.target.value)} />

          <Button variant="contained" onClick={handleSaveSessionClick}>
            Save Session
          </Button>
        </div>
      </PopoverComp>
    </>
  )
}

export default SaveSession
