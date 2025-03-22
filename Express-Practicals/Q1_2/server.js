const express = require('express');

const app = express();

app.get("/",(req,resp)=>{
    resp.end("Hello");
})

app.post("/addData",(req,resp)=>{
    resp.end("added");
})

app.listen(2000,()=>{
    console.log("server is running...");
    
})