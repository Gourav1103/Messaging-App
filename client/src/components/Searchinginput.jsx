import { Box, Button, InputBase,makeStyles,Grid } from "@material-ui/core";
import{Search as SearchIcon} from '@material-ui/icons';
import { styled,alpha } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Account } from "./context/AccountContext";
import { User } from "./context/UserContexct";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 7,
     backgroundColor: '#ffe6e6',
     marginLeft:'50px ',
     marginRight:'20px',
    width: '75%',

  
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    color:'#000080',
    padding: '0px 4px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width:'100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: 30,
      fontSize:14,
      height:17,
      borderColor:'#000080',
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));
const Searchinginput=(props)=>{
  
  const url = 'http://localhost:8000';
  const[ typeMessage,setTypeMessage ]=  useState('');
  const [arrivalMessage,setArrivalMessage]=useState(null);
  const ctx=useContext(Account);
  const ctx1=useContext(User);
 useEffect(async()=>{
   if(ctx1.user){ const response=await axios.post(`${url}/getmessage`,{
     from:ctx.account.email,
     to:ctx1.user.email,
   })
   props.setMssgs(response.data);}
  
 },[ctx1.user])
const inputchangeHandler=(event)=>{
          
  setTypeMessage(event.target.value);
 console.log(typeMessage);
      
} 

const insertHandler=async()=>{
  try{
    let response= await axios.post(`${url}/addmes`,{
      from:ctx.account.email,
      to:ctx1.user.email,
      message:typeMessage
   }
   
   );
   
}catch(error){
console.log('error while calling login api',error.message);
} 
 props.socket.current.emit("send-mssg",{
   to:ctx1.user.email,
   from:ctx.account.email,
   message:typeMessage
 })
 const msgs=[...props.messages];
 msgs.push({fromself:true,message:typeMessage})
 props.setMssgs(msgs);
setTypeMessage('')
}

 useEffect(()=>{
   if(props.socket.current){
     props.socket.current.on("msg-receive",(msg)=>{
       console.log(msg);
     setArrivalMessage({fromself:false , message:msg})
     })
   }
 },[])
  useEffect(()=>{
    arrivalMessage && props.setMssgs((prev)=>[...prev,arrivalMessage])
  },[arrivalMessage])
  useEffect(()=>{
   props.scrollref.current?.scrollIntoView({behaviour:'smooth'})
  },[props.messages])
   
    return(
      
      <Grid container>
      <Grid item lg={12} md={11} sm={11} xs={6}>
      <Box style={{background:"#F6F6F6",height:50,display:'flex',alignItems:'center',borderColor:'ActiveBorder'}}>
         
        <Search>
        <StyledInputBase
          placeholder="Type a message"
          inputProps={{ 'aria-label': '' }}
          style={{color:'#000080'}}
          name='message'
          value={typeMessage}
          onChange={inputchangeHandler}
          
        />
       
      </Search>
     {typeMessage ? <Button onClick={insertHandler} style={{color:'#ff66cc'}}>Enter</Button>:<Button onClick={insertHandler} disabled style={{color:'#ff66cc'}} >Enter</Button> }
    
      </Box>
      </Grid></Grid>  
    );
}
export default Searchinginput;