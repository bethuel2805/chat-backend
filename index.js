const express = require("express")

const app = express()

const server = require("http").createServer(app)

const PORT = 5000

const io = require("socket.io")(server)

io.on("connect",(socket)=>{
    console.log("Socket connected : "+socket.id);
})

app.listen(PORT,()=>{
    console.log("Server Start...");
})