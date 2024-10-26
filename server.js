import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port=2000;
const connt=express();
const conntPath=path.dirname(fileURLToPath(import.meta.url));

connt.use("/static",express.static(path.join(conntPath,"static")));
connt.use(express.urlencoded({extended:true}));
function validity(req,res,next){
    req.valid=(req.body._email==="abc@gmail.com" && req.body._pass==="000");
    next();

}
connt.use(validity);
connt.set("view engine","ejs");
connt.set("views",path.join(conntPath,"static"));

connt.listen(port,()=>{
    console.log(`port ${port} connected...`);
})

connt.get("/",(req,res)=>{
    res.sendFile(path.join(conntPath,"login.html"));
})

connt.post("/main",function (req,res){
if(req.valid){
    res.render("main.ejs",{
        password:req.body._pass,
        email:req.body._email
    })
    }
})

