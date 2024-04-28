const express=require("express");

const cors=require("cors")

const cookie_parser=require("cookie-parser")

const app=express();

app.use(cookie_parser())
 app.use(cors({origin:true,credentials:true}))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(require("./routes/link"));

app.listen(8007,()=>{
    console.log(`listening at the port 8007`)
})