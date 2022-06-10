import Message from '../model/messageSchema.js';
import crypto from 'crypto';
import { Securitykey,initVector} from './default.js';
export const addMessages = async(request,response,next)=>{
    try{
        const{from,to,message}=request.body;
        const algorithm = "aes-256-cbc"; 


const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

      console.log(Securitykey);
      
        const data= await Message.create({
            message:{text:encryptedData},
            users:[from,to],
            sender:from,
            Keys:{security:Securitykey,iv:initVector}
        })
        if(data){
            return response.json({msg:"Message added successfully"})
        }
        return response.json({msg:"Fail to added message in database"})
    }
    catch(ex){
        next(ex);
    }
}
export const getAllMessages= async(request,response,next)=>{
    try{
    const{from,to}=request.body;
    const messages= await Message.find({
        users:{
            $all : [from,to],
        },
    }).sort({updatedAt:1})
    const projectmessages = messages.map((msg)=>{
        const algorithm = "aes-256-cbc"; 
;
  const decipher1= crypto.createDecipheriv(algorithm, msg.Keys.security, msg.Keys.iv);
  let Decrypted=decipher1.update(msg.message.text,"hex","utf-8");
  Decrypted+=decipher1.final("utf-8");

        
         return {fromself:msg.sender.toString()===from,
            message:Decrypted,}
        
    })
     response.json(projectmessages)
}
catch(ex){
    next(ex);
}
}