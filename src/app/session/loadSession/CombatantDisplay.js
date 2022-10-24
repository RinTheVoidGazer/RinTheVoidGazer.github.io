import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"

const CombatantDisplay = ({ info }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>

        <ListItemText
          primary={info.name}
          secondary={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  HP:{" "}
                </Typography>

                {`${info.curHp}/${info.maxHp}`}
              </span>

              <span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Initiative:{" "}
                </Typography>

                {info.init}
              </span>

              <span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  AC:{" "}
                </Typography>

                {info.ac}
              </span>

              <span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Statuses:{" "}
                </Typography>

                {info.statuses}
              </span>

              <span>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Is Enemy:{" "}
                </Typography>

                {`${info.isEnemy}`}
              </span>
            </div>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  )
}

export default CombatantDisplay
