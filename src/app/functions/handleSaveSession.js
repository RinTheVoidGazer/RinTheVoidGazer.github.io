// config
import apiConfig from "../config/apiConfig"

// axios
import axios from "axios"

const handleSaveSession = (session) => {
  axios.post(apiConfig.local.addSession, session).then((resp) => {
    console.log("save session", resp.data)
  })
}

export default handleSaveSession
