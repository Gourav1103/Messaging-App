import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
      message:{
          text:{
              type:String,
              require:true
          },
      },
      users:Array,
      sender:{
          type:mongoose.Schema.Types.String,
          ref:"user",
          require:true
      },
      Keys:{
          security:{
              type:String,
              required:true,
          },
          iv:{
              type:String,
              required:true,
          }
      }
  },
  {
       timestamps:true
  }
   
    
);
const Message = mongoose.model('message',messageSchema);
export default Message;