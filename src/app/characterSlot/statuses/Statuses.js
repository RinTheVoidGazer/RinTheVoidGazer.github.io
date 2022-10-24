//Make chips

import { Button, Chip, Fab, IconButton, Tooltip } from "@mui/material"
import ParentBox from "../../globalComponents/layout/ParentBox"
import Avatar from "@mui/material/Avatar"
import AddIcon from "@mui/icons-material/Add"
import Popover from "@mui/material/Popover"
import { TextField } from "@mui/material"

import { useState } from "react"
import handleAddNewStatus from "./handleAddNewStatus"
import handleStatusDeletion from "./handleStatusDeletion"

const Statuses = ({ objKey, charEditIndex, characterValue, setCombatants }) => {
  const [newStatusName, setNewStatusName] = useState("")
  const [newStatusDuration, setNewStatusDuration] = useState("")

  // Popover Values
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const handleAddStatusClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // Not used ATM
  // const handleClick = (e) => {
  //   console.info("You clicked the Chip.", e)
  // }

  return (
    <ParentBox gap="5px">
      <Tooltip title="Add a Status">
        <Fab
          aria-describedby={id}
          size="small"
          color="primary"
          aria-label="remove character"
          onClick={handleAddStatusClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ParentBox flexDirection="column" padding="3px">
          <TextField
            label="Status Name"
            variant="standard"
            size="small"
            value={newStatusName}
            onChange={(e) => setNewStatusName(e.target.value)}
          />

          <TextField
            label="Status Duration"
            variant="standard"
            type="number"
            size="small"
            value={newStatusDuration}
            onChange={(e) => setNewStatusDuration(e.target.value)}
          />

          <Button
            disabled={!newStatusName || !newStatusDuration}
            variant="contained"
            onClick={() =>
              handleAddNewStatus(
                setCombatants,
                charEditIndex,
                objKey,
                newStatusName,
                newStatusDuration
              )
            }
          >
            Add Status
          </Button>
        </ParentBox>
      </Popover>

      {characterValue.map((status, index) => {
        return (
          <Chip
            key={index}
            name={status.name}
            avatar={<Avatar>{status.duration}</Avatar>}
            label={status.name}
            // onClick={() => handleClick(index)}
            onDelete={() =>
              handleStatusDeletion(objKey, index, setCombatants, charEditIndex)
            }
          />
        )
      })}
    </ParentBox>
  )
}

export default Statuses
