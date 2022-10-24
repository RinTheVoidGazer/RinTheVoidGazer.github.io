import * as React from "react"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"

const DialogComp = (props) => {
  const { diagTitle, children, onClose, open } = props

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{diagTitle}</DialogTitle>

      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {children}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComp
