import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.post("/submit",(req,res)=>{
    const subject=req.body.subject;
    const a=req.body.a;
    const h=req.body.h;
});
app.listen("5000",()=>{
    console.log("The servver is running on the port 3000");
}
)