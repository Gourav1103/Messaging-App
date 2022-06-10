import axios from "axios";
const url = 'http://localhost:8000';
 const Authenticatelogin=async(user)=>{
    try{
         let response= await axios.post(`${url}/login`,{
           username:user.name,
           email:user.email,
           image:user.imageUrl
        });
  }catch(error){
    console.log('error while calling login api',error.message);
  }
}
export default Authenticatelogin;
