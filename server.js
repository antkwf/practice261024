import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const port=2000;
const connt=express();
const conntPath=path.dirname(fileURLToPath(import.meta.url));

connt.use("/static",express.static(path.join(conntPath,"static")));

connt.listen(port,()=>{
    console.log(`port ${port} connected...`);
})

connt.get("/",(req,res)=>{
    res.sendFile(path.join(conntPath,"login.html"));
})

