import { AppBar, Box, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import Login from "./Account/Login";
import Chatapp from "./Chatbox";
import { Account } from "./context/AccountContext";
const useStyle= makeStyles({
  components:{
      background:"#DCDCDC",
      height:"100vh"
  } 
    ,loginHeader:{
     height:200,
     background:"#000080",
     boxShadow:'none'
 }
 ,
 header:{
    height:115,
    background:"#000080",
    boxShadow:'none'
 }
})
const Messenger=()=>{
    const classes= useStyle();
   const {account}= useContext(Account);
 return(
     <Box className={classes.components}>
         <AppBar className={account?classes.header : classes.loginHeader}>
             <Toolbar></Toolbar>
         </AppBar>
          
        {account ? <Chatapp/> : <Login/>}
        
     
     </Box>
 );
}
export default Messenger;