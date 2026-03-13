const express = require("express")
const mysql = require("mysql2")

const app = express()

app.get("/", (req,res)=>{
 res.send("Backend API Working")
})

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})
