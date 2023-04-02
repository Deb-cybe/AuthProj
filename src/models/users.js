require('dotenv').config();
console.log(process.env.SECRET_KEY);

const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
   name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true,
    },  
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,  
    },
    password1:{
        type:String, 
    },
    /*tokens:[{
        token:{
            type:String,
            required:true
        }
    }]*/
});

// generating tokens
userSchema.methods.generateToken=async(id,res)=>{
    try {
        const token=await jwt.sign({_id:id},
        process.env.SECRET_KEY);
        // console.log(token);
        // this.tokens=({token:token});
        // await this.save();
        return token;
    } catch (error) {
        // res.send("Error: "+error);
        console.log("Error: "+error);
    }
}

const User=new mongoose.model('Register',userSchema);
module.exports=User;