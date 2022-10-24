import { useState } from "react"

// Styles
import "../App.css"

// Components
import CharacterSlot from "./characterSlot/CharacterSlot"
import characterData from "./data/characterData"

//Material-Ui
import Theme from "../Theme"
import AddCharacter from "./AddCharacter"
import NextCombatant from "./NextCombatant"
import TurnDisplay from "./TurnDisplay"
import { Paper } from "@mui/material"
import ManageData from "./session/ManageData"

function Tracker() {
  const [combatants, setCombatants] = useState([...characterData])
  const [turnCount, setTurnCount] = useState(1)
  const [activeCombatant, setActiveCombatant] = useState(0)

  return (
    <Theme>
      <div className="App">
        <div className="App-header">
          <ManageData
            color="primary"
            manageSessionLoad={{
              setCombatants: setCombatants,
              setTurnCount: setTurnCount,
              setActiveCombatant: setActiveCombatant,
            }}
            manageSessionSave={{
              combatants: combatants,
              turnCount: turnCount,
              activeCombatant: activeCombatant,
            }}
          />

          <Paper
            elevation={5}
            style={{
              borderRadius: "5px",
              background: "rgb(20, 20, 20)",
              display: "flex",
              flexDirection: "column",
              // flex: 1,
              width: "90vw",
              height: "80vh",
              //   gap: "12px",
              padding: "8px",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "95%",
                // gap: "12px",
                overflow: "auto",
              }}
            >
              {combatants.map((charInfo, index) => {
                return (
                  <CharacterSlot
                    key={index}
                    charInfo={charInfo}
                    index={index}
                    combatants={combatants}
                    setCombatants={setCombatants}
                    activeCombatant={activeCombatant}
                  />
                )
              })}
            </div>

            <div style={{ position: "absolute", bottom: 8, right: 8 }}>
              <AddCharacter setCombatants={setCombatants} />
            </div>

            <div style={{ position: "absolute", bottom: 8, right: 60 }}>
              <NextCombatant
                combatants={combatants}
                activeCombatant={activeCombatant}
                setCombatants={setCombatants}
                setActiveCombatant={setActiveCombatant}
                setTurnCount={setTurnCount}
                turnCount={turnCount}
              />
            </div>

            <div style={{ position: "absolute", bottom: 8, left: 8 }}>
              <TurnDisplay turnCount={turnCount} />
            </div>
          </Paper>
        </div>
      </div>
    </Theme>
  )
}

export default Tracker
