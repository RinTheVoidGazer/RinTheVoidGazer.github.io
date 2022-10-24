// MUI
import { Divider, Paper, Button } from "@mui/material"
import DialogComp from "../../reusableComps/DialogComp"

// Components
import CharacterDataParse from "./CharacterDataParse"

// Functions
import parseObjKeys from "../../functions/parseObjKeys"

const SessionSelection = ({
  sessions,
  setCombatants,
  setTurnCount,
  setActiveCombatant,
}) => {
  const handleLoadSession = (combatants, turnCount, activeCombatant) => {
    setCombatants(combatants)
    setTurnCount(turnCount)
    setActiveCombatant(activeCombatant)
  }

  return sessions
    ? sessions.map((session) => {
        return (
          <Paper
            key={session.id}
            style={{
              gap: "5px",
              flexDirection: "column",
              display: "flex",
              margin: "8px",
              padding: "8px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleLoadSession(
                session.characterData,
                session.turnCount,
                session.activeCombatant
              )
            }}
          >
            {Object.entries(session).map((sessionInfo, index) => {
              return (
                sessionInfo[0] !== "id" && (
                  <>
                    <span key={index}>
                      {sessionInfo[0] !== "characterData" ? (
                        `${parseObjKeys(sessionInfo[0])}: ${sessionInfo[1]} `
                      ) : (
                        <span style={{ display: "flex", gap: "5px" }}>
                          {`${parseObjKeys(sessionInfo[0])}: `}
                          <CharacterDataParse combatants={sessionInfo[1]} />
                        </span>
                      )}
                    </span>

                    {sessionInfo[0] === "sessionName" && <Divider />}
                  </>
                )
              )
            })}
          </Paper>
        )
      })
    : null
}

export default SessionSelection
