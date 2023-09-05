const mongoose=require('mongoose');



const userSchema=new mongoose.Schema({

   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   phone:{
    type:String,
    required:true
},
  work:{
    type:String,
    required:true
},
  password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
},
tokens:[
    {
        token:{
            type:String,
            required:true
        }
    }
]

   





})

//made a collection with model
const User=mongoose.model('user',userSchema);

module.exports=User;
