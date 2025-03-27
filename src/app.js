import express from "express"
import airouter  from "./routers/ai.routers.js"

const app = express()
app.use(express.json())

// app.get("/", (req, res)=>{
//     res.send("Hiii rahul ")
// })

app.use("/ai", airouter)

export {app}