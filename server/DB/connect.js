const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path:"./config.env"});

const db=process.env.DATABASE;




mongoose.connect(db).then(()=>{console.log("connection sucessful")}).catch((error)=>{console.log(error)});
