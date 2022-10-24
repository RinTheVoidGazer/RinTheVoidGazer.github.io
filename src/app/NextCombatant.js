import { Fab, Tooltip } from "@mui/material"
import NextCombatantIcon from "@mui/icons-material/NavigateNext"

const NextCombatant = ({
  combatants,
  setCombatants,
  activeCombatant,
  setActiveCombatant,
  setTurnCount,
  turnCount,
}) => {
  const handleNextCombatant = () => {
    let tempActiveCombatant =
      activeCombatant === combatants.length - 1 || combatants.length === 0
        ? 0
        : activeCombatant + 1

    setActiveCombatant(
      activeCombatant === combatants.length - 1 || combatants.length === 0
        ? 0
        : activeCombatant + 1
    )

    // Turn Count Increment
    if (activeCombatant === combatants.length - 1) {
      setTurnCount(turnCount + 1)
    }

    //--------------------- Status handling

    if (combatants[tempActiveCombatant].statuses.length !== 0) {
      console.log("has status")
      setCombatants((prevState) => {
        const newState = prevState.map((obj, index) => {
          // 👇️ if id equals 2, update country property
          if (tempActiveCombatant === index) {
            let newStatusArray = [...obj["statuses"]]
            console.log("newStatusArray start", newStatusArray)

            // Filters out statuses that will end on this turn and then decrements the remaining conditions
            newStatusArray = newStatusArray
              .filter((status) => {
                return status.duration !== 0

                // LOOK INTO HOW TO HANDLE STATUS DECREMENTS/REMOVAL https://www.reddit.com/r/Pathfinder2e/comments/e7crv0/duration_1_round/
              })
              .map((status) => {
                return {
                  name: status.name,
                  duration: status.duration - 1,
                }
              })

            console.log("FINAL", newStatusArray)
            return {
              ...obj,
              statuses: newStatusArray,
            }
          }

          // 👇️ otherwise return object as is
          return obj
        })

        return newState
      })
    }
  }

  return (
    <Tooltip title="Next Combatant">
      <Fab
        size="small"
        color="primary"
        aria-label="remove character"
        onClick={handleNextCombatant}
      >
        <NextCombatantIcon />
      </Fab>
    </Tooltip>
  )
}

export default NextCombatant
