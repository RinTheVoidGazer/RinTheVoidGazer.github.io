import * as React from "react"

// MUUI
import Popover from "@mui/material/Popover"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const PopoverComp = ({
  id,
  open,
  anchorEl,
  children,
  handleClose,
  anchorOrigin = { vertical: "top", horizontal: "right" },
}) => {
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
      >
        <Typography sx={{ p: 2 }}>{children}</Typography>
      </Popover>
    </div>
  )
}

export default PopoverComp
