const dotenv=require('dotenv');
const express=require('express');
const cors = require("cors")

const app=express();
require('./DB/connect')
const User=require('./model/userSchema');
app.use(express.urlencoded({ extended: true }))

app.use(cors())



app.get("/",cors(),(req,res)=>{

    

})

//web json nhi samjhta
app.use(express.json());


// we link the router files to make our route easy
app.use(require('./router/routers'));




//env code
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT;








//middleware

const midddleware=(req,resp,next)=>{

    console.log("hello middleware");
    next()

}





app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`
    )
});

