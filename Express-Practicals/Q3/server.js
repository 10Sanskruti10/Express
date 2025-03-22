const express = require('express');
const connectMongo = require('./db.js');
const router = require('./route/empRoute.js');

connectMongo();

const app = express();
app.use(express.json());

app.get("/test",(req,resp)=>{
    resp.end("hii");
})

app.use("/emp",router)

app.listen(2300,()=>{
    console.log("running...");
    
})