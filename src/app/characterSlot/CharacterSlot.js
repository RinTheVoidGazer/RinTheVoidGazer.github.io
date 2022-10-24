import { Button, Paper, TextField } from "@mui/material"
import { fontSize } from "@mui/system"
import "../../styles/LayoutStyles.css"
import ParentBox from "../globalComponents/layout/ParentBox"
import ACInput from "./ACInput"
import DamageInput from "./DamageInput"
import EnemyToggle from "./EnemyToggle"
import HPBar from "./HPBar"
import InitInput from "./InitInput"
import NameInput from "./NameInput"
import RemoveCharacter from "./RemoveCharacter"
import Statuses from "./statuses/Statuses"

// CSS
import "../../styles/ActiveCombatantEffect.css"

const CharacterSlot = ({
  charInfo,
  index,
  combatants,
  setCombatants,
  activeCombatant,
}) => {
  return (
    <ParentBox padding="8px">
      <div
        className={activeCombatant === index ? "useBliinker" : ""}
        style={{ flex: 1 }}
      >
        <Paper
          name="characterSlot"
          elevation={3}
          sx={{
            bgcolor: charInfo.isEnemy ? "#57000cff" : "#7c7cd2ff",
          }}
          // className="ripple"
          style={{
            height: "15vh",
            flex: 1,
            flexDirection: "column",
            alignItems: "stretch",
            display: "flex",
            // borderStyle: activeCombatant === index ? "dotted" : "",
          }}
        >
          <ParentBox
            name="characterSlotTop"
            justifyContent="space-between"
            padding="8px 8px 0px 8px"
          >
            <ParentBox
              name="characterNameStatuses"
              flexDirection="column"
              padding="3px"
            >
              <span style={{ alignSelf: "start" }}>
                <NameInput
                  objKey="name"
                  charEditIndex={index}
                  characterValue={charInfo.name}
                  setCombatants={setCombatants}
                />
              </span>

              <span style={{ alignSelf: "start", fontSize: "12px" }}>
                <Statuses
                  objKey="statuses"
                  characterValue={charInfo.statuses}
                  charEditIndex={index}
                  setCombatants={setCombatants}
                />
              </span>
            </ParentBox>

            <ParentBox name="characterInitAC" padding="3px">
              <ACInput
                objKey="ac"
                charEditIndex={index}
                characterValue={charInfo.ac}
                setCombatants={setCombatants}
              />

              <InitInput
                objKey="init"
                charEditIndex={index}
                characterValue={charInfo.init}
                setCombatants={setCombatants}
              />
            </ParentBox>
          </ParentBox>

          <ParentBox
            name="characterSlotBottom"
            alignItems="center"
            justifyContent="center"
          >
            <HPBar
              curHp={charInfo.curHp}
              maxHp={charInfo.maxHp}
              charEditIndex={index}
              setCombatants={setCombatants}
            />
          </ParentBox>
        </Paper>
      </div>

      <ParentBox
        name="characterSlotActions"
        flexDirection="column"
        alignItems="center"
        gap="8px"
      >
        <RemoveCharacter charEditIndex={index} setCombatants={setCombatants} />

        <DamageInput
          objKey="curHp"
          charEditIndex={index}
          characterValue={charInfo.curHp}
          setCombatants={setCombatants}
          maxHp={charInfo.maxHp}
        />

        <EnemyToggle
          objKey="isEnemy"
          charEditIndex={index}
          characterValue={charInfo.isEnemy}
          setCombatants={setCombatants}
        />
      </ParentBox>
    </ParentBox>
  )
}

export default CharacterSlot
