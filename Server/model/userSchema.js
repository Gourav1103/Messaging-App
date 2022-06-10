import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    image:{
        type:String     
    }
    
});
const user = mongoose.model('user',userSchema);
export default user;