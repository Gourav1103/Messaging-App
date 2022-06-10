import  mongoose  from "mongoose";
const Connection=async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.2k11w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
   try{
   await mongoose.connect(URL);
    console.log("Database connected successfully");
   }catch(error){
       console.log('Error :',error.message);
   }
}
export default Connection;