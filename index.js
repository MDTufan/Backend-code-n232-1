const express=require("express");
const app =express();
const port=3001;



app.get("/",(req,res)=>{
    res.status(200).send({
        message:"This is The home route"
    })
})

app.use("*",(req,res)=>{
  res.status(400).json({
    message:"Route is not Found"
  })
})

app.listen(port,()=>{
    console.log(`Server is runing http://localhost:${port}`);
})