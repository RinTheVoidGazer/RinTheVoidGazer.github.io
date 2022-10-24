import { Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import updateNonNestedCharacterValue from "../functions/updateNonNestedCharacterValue"

const HPBar = ({ curHp, maxHp, charEditIndex, setCombatants }) => {
  let hpBarColor =
    (curHp / maxHp) * 100 >= 80
      ? "green"
      : (curHp / maxHp) * 100 >= 30
      ? "orange"
      : curHp <= 0
      ? "black"
      : "red"

  return (
    <Paper
      name="hpBarBG"
      elevation={3}
      style={{ width: "50%", background: "black", position: "relative" }}
    >
      <Paper
        name="hpBarActualBar"
        elevation={0}
        style={{
          zIndex: 0,
          width: `${(curHp / maxHp) * 100}%`,
          background: hpBarColor,
        }}
      >
        <div
          name="hpBarNumbers"
          style={{ position: "absolute", top: 0, left: "45%", color: "white" }}
        >
          <div>
            <TextField
              variant="standard"
              type="number"
              size="small"
              style={{ width: "50px" }}
              inputProps={{
                max: maxHp,
              }}
              value={curHp}
              onChange={(e) =>
                updateNonNestedCharacterValue(
                  "curHp",
                  parseInt(e.target.value) > maxHp
                    ? maxHp
                    : parseInt(e.target.value),
                  setCombatants,
                  charEditIndex
                )
              }
            />
            /
            <TextField
              variant="standard"
              type="number"
              size="small"
              style={{ width: "50px" }}
              value={maxHp}
              //   onChange={(e) => setMaxHpInput(e.target.value)}
              onChange={(e) =>
                updateNonNestedCharacterValue(
                  "maxHp",
                  parseInt(e.target.value),
                  setCombatants,
                  charEditIndex
                )
              }
            />
          </div>

          {/* <Typography variant="h4">{`${curHp}/${maxHp}`}</Typography> */}
        </div>

        {/* Here to make the actual bar show up as position absolute doesn't count as a child apparently */}
        <span
          style={{
            color: hpBarColor,
          }}
        >
          &nbsp;
        </span>
      </Paper>
    </Paper>
  )
}

export default HPBar
