import { Box, Button, makeStyles,Typography,Link} from "@material-ui/core";
import { useContext } from "react";
import { Account } from "../context/AccountContext";
import { User } from "../context/UserContexct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import Right from "../Right";
import axios from "axios";
import { Sender } from "../context/SenderContext";
const useStyle=makeStyles({
    com:{
        display:'flex',
        margin:'20px 20px 20px 10px',
        backgroundColor: '#FFFFFF',
        boxShadow:'0px 1px 1px rgba(0,0,0,0.08)',
        width:'98%',

    }
    ,image:{
        
        height:37,
        width:37,
        borderRadius:'50%',
    }
})

const Conversation=()=>{
     const[users,setUsers]=useState([]);
    const url = 'http://localhost:8000'
    const {account}=useContext(Account);
    const ctx=useContext(User);
    const ctx1=useContext(Sender);

    //  const {users}= useSelector(state=>state.getUsers);
    //  console.log(users);
//    const dispatch=useDispatch();
//    useEffect(()=>{
//        dispatch(getUsers());
//    },[dispatch])
     
      useEffect(async()=>{
        const {data}= await axios.get(`${url}/users`)
          console.log(data);
          for(var i = 0; i < data.length; i++){
            if ( data[i].email === account.email) {     
                data.splice(i, 1); 
            }
          }
         setUsers(data);
      },[])   
    
     

    const classes=useStyle();
    return(
        <>
          { users.map(user=>(
        <Link onClick={()=>{ctx.setUser(user)}}>        
        <Box className={classes.com}>
            <img src={user.image} alt="display" className={classes.image}/>
            <Box><Typography style={{fontSize:16 ,color:"black",width:'100%',marginLeft:'20px' }}>{user.username}</Typography>  
                <Typography style={{display:'flex',flexDirection:'column',fontSize:14,marginLeft:'20px'}}>Hey!</Typography>
             </Box>
             
         </Box> 
         </Link>
          ))
         }  
          
         
        </>
    );
}
export default Conversation;