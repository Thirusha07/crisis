const express = require("express");
const app=express();
const port=8000; 
app.get("/home",function(req,res)
{
    res.send("<h1>Backend</h1>")
})
app.listen(port, function(){
    console.log("server started on port 8000");
})

