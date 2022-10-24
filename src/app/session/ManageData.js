// MUI
import SpeedDial from "@mui/material/SpeedDial"
// import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import DataIcon from "@mui/icons-material/Save"

// Components
import LoadSession from "./loadSession/LoadSession"
import SaveSession from "./SaveSession"

const ManageData = ({ manageSessionLoad, manageSessionSave }) => {
  const actions = [
    {
      icon: (
        <SaveSession
          combatants={manageSessionSave.combatants}
          turnCount={manageSessionSave.turnCount}
          activeCombatant={manageSessionSave.activeCombatant}
        />
      ),
      name: "Save Session",
    },
    {
      icon: (
        <LoadSession
          setCombatants={manageSessionLoad.setCombatants}
          setTurnCount={manageSessionLoad.setTurnCount}
          setActiveCombatant={manageSessionLoad.setActiveCombatant}
        />
      ),
      name: "Load Session",
    },
  ]

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "absolute", top: 10, left: 10 }}
      direction="right"
      icon={<DataIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}

export default ManageData
