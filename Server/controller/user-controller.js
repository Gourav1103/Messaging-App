import User from '../model/userSchema.js';
export const userLogin = async(request,response)=>{
    try{

        let user= await User.findOne({username:request.body.username , email:request.body.email});
        
        if(user){
            return response.status(200).json(`${request.body.username}login successfully`);
        }
        
        else{
            const user = request.body;
            const newuser = new User(user);
            await newuser.save();
            return response.status(200).json("User Login First Time");
        }

    }catch(error){
        console.log('Error :',error.message);
    }
}

export const getusers=async(request,response)=>{
    try{
        const users= await User.find({});
        response.json(users);
   }catch(error){
       console.log('Error :',error.message );
   }

}