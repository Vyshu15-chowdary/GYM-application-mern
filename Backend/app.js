import express from "express"
import {config}from "dotenv"
import cors from "cors"

const app = express();
const router = express.Router();

config({path: "./Config.env"});


app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,
   
        
    
})
); //useful to connect backend and frontend


app.use(express.json());
app.use(express.urlencoded ({extended:true}));

router.use(router);
router.post("/send/mail",async(req,res,next)=>{
   const{name,email,message} = req.body;
   if(!name || !email || !message){
    return next(res.status(400).json({
        sucess:false,
        message:"Please provide all details"
    }))
   }
   
})

router.get("/",(req,res,next)=>{

    res.json({sucess:true,
        message:"WELCOME TO MY PROJECT"
    });

})

app.use(router);

app.listen(process.env.PORT,()=>{

    console.log(`server listening stport ${process.env.PORT}`)
});
