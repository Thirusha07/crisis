const express = require("express");
const cors = require("cors");
const app=express();
const port=8000; 
app.use(
    cors({
      origin:  "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    })
  );
app.use(express.json());
app.options("/home", cors());

app.get("/home",function(req,res)
{
    res.send("<h1>Backend</h1>")
})
app.post("/save",function(req,res)
{
    var name=req.body.user
    var age= req.body.pass
    console.log(name , age)
    res.json({msg:"received"})
})
app.listen(port, function(){
    console.log("server started on port 8000");
})

