const express = require("express")

const app = express()

const server = require("http").createServer(app)

const PORT = 5000

const io = require("socket.io")(server)

app.listen(PORT,()=>{
    console.log("Server Start...");
})