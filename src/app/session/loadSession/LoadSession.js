import { useState } from "react"

// MUI
import LoadIcon from "@mui/icons-material/Download"

// config
import apiConfig from "../../config/apiConfig"

// axios
import axios from "axios"

// Components
import DialogComp from "../../reusableComps/DialogComp"
import SessionSelection from "./SessionSelection"

const LoadSession = ({ setCombatants, setTurnCount, setActiveCombatant }) => {
  const [sessions, setSessions] = useState()
  const [diagOpen, setDiagOpen] = useState(false)

  const handleClose = () => {
    setDiagOpen(false)
  }

  const handleGetAllSessions = () => {
    setDiagOpen(true)

    axios.get(apiConfig.local.getAllSessions).then((res) => {
      setSessions(res.data)
    })
  }

  return (
    <>
      <DialogComp
        diagTitle="Select a Session"
        open={diagOpen}
        onClose={handleClose}
      >
        <SessionSelection
          sessions={sessions}
          setCombatants={setCombatants}
          setTurnCount={setTurnCount}
          setActiveCombatant={setActiveCombatant}
        />
      </DialogComp>

      <LoadIcon onClick={handleGetAllSessions} />
    </>
  )
}

export default LoadSession
