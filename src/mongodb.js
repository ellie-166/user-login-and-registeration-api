const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UserDetails")
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('Error observed!');
})


const loginSchema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },

    password:{
        type: String,
        required:true
    },

    email:{
        type: String,
        required:true
    }
})
const collection=new mongoose.model("collection1",loginSchema)

module.exports = collection