import { Box, Dialog, makeStyles, Toolbar, withStyles,AppBar,Typography,Grid } from "@material-ui/core";
import Searchinginput from "./Searchinginput";
import{Search as SearchIcon} from '@material-ui/icons';
import { styled,alpha } from "@material-ui/core";
import { useState,useContext, useRef } from "react";
import { Account } from "./context/AccountContext";
import { User } from "./context/UserContexct";
import {v4 as uuidv} from 'uuid';
import Image from '../components/constents/robot.gif'
const useStyle=makeStyles({
    
    rightcomponent:{
      borderLeft:' 1px solid rgba(0,0,0,0.14)',
      minWidth:1200,
      
    },
    loginHeader:{
        
        background:"#ededed",
        boxShadow:'none',
        height:35,
        padding:"10px 16px",
        display:'flex',
        alignItems:'center'
    },
    image:{
        height:37,
        width:37,
        borderRadius:'50%',
    
    },
    messagecon:{
        display:'flex',
        flexDirection:'column',
        height:'80vh',
        background:'#f3e7d8',
        overflow:'hidden',
        overflowY:'scroll',
        paddingLeft:'10px',
        paddingRight:'30px',
        maxWidth:'90%'
        
        
    },
    receiver:{
      marginLeft:'auto',
      marginTop:'20px',
      marginBottom:'20px',
      borderRadius:'10px',
      display:'flex',
      minWidth:'40px',
      background:'#000080',
      minHeight:'auto',
      maxWidth:'400px',
      maxHeight:'auto',
      marginRight:'20px'
    },
    sender:{
      marginRight:'auto',
      marginTop:'20px',
      marginBottom:'20px',
      marginLeft:'20px',
      borderRadius:'10px',
      display:'flex',
      minWidth:'40px',
      background:'#ffffff',
      minHeight:'auto',
      maxWidth:'400px',
      maxHeight:'auto'
    },
    recmess:{
      color:'#ffffff',margin:'10px'
    },
    sendermess:{
      color:'#000080',margin:'10px'
    }
   
})
const SearchIconWrapper = styled('div')(({ theme }) => ({
    color:'#000080',
    padding: '0px 4px',
    // height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:800
   
  }));
const Right=({socket})=>{
    const [mssgs,setMssgs]=useState([]);
    const {account}=useContext(Account);
    const{user}=useContext(User);
    const scrollref=useRef();
    const time=new Date().getHours();
    const time2=new Date().getMinutes();
   const classname=useStyle();
    return (
    <Box className={classname.rightcomponent}>
    { user && user.username!= account.name ? 
     <>
  
  <Grid container>
            <Grid item lg={12} md={8} sm={4} xs={4}>
    <Box className={classname.loginHeader}>
    <img src={user.image}  alt="display" className={classname.image}/>
    <Box style={{display:'flex',flexDirection:'column'}}>
    <Typography style={{marginLeft:'20px'}}> {user.username}</Typography>
     <Typography style={{fontSize:'12px',marginLeft:'20px'}}>Last seen... </Typography>
     
     </Box>

     <SearchIconWrapper>
     <SearchIcon fontSize="medium" />
     </SearchIconWrapper>
     
     </Box>
       
       <Box className={classname.messagecon} >

        {  mssgs.map((message)=>{
          
          return(
           
           
          <Box ref={scrollref} key={uuidv()} className={ message.fromself ? classname.receiver : classname.sender} >
          <p className={message.fromself ? classname.recmess : classname.sendermess}>{message.message}</p>
        </Box>
        
      )
        
    })
    } 
           
    </Box>  
        
      <Searchinginput setMssgs={setMssgs} socket={socket} messages={mssgs} scrollref={scrollref}/>
    
    </Grid>
    </Grid>
      </>
       : <>
       <Box style={{alignItems:'center', marginTop:100,marginLeft:'300px'}}>
         <img alt="Hello" src={Image} style={{borderRadius:20}} />
         
       </Box>
       </> } 
    </Box>
    
  );
}
export default Right;