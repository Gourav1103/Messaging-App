import { Dialog, withStyles,Box,Typography, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useContext } from "react";
import {GoogleLogin} from 'react-google-login';
import { Account } from "../context/AccountContext";
import { clientid } from "../constents/Constents";
import  Authenticatelogin  from "../../Service/Authenticatelogin";
const useStyle=makeStyles({
    components:{
    display:'flex'
    },
    leftcomponent:{
     padding:'56px 0 56px 120px'
    },
    qrcode:{
        height:256,
        width:256,
        padding:'50px 0 0 50px'
    },
    title:{
        fontSize:26,
        marginBottom:25,
        color:'#525252',
        fontWeight:300
    }
})
const style={
    dialogpaper:{
        height:'95%',
        marginTop:'12%',
        width:'60%',
        boxShadow:'none',
        borderRadius:'0',
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}
const Login=({classes})=>{
    const qrcode='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const classname = useStyle();
   
    const ctx=useContext(Account);
    

    const loginsuccess =async(res)=>{
        
         console.log("Login Successful",res.profileObj);
        ctx.setAccount(res.profileObj);
        Authenticatelogin(res.profileObj);
    }
    const loginFailure=()=>{
        console.log("Login failure");
    }
    return(
        <Dialog
        open={true}
        classes={{paper:classes.dialogpaper}}
        BackdropProps={{style: {backgroundColor:'unset'}}}
        >
            <>
            <h1 style={{alignItem:'center',marginLeft:'420px',color:'#000080'}}>ChitChat App</h1>
         <Box className={classname.components}>
             
             <Box className={classname.leftcomponent}>
               <Typography className={classname.title}>To use ChatApp in Desktop:</Typography>
               <List>
                   <ListItem>1.Open ChatApp in Your Brawser</ListItem>
                   <ListItem>2.Tap Menu or Setting and Select Linked Devices </ListItem>
                   <ListItem>3.Point your phone to this screen to capture the code.</ListItem>
               </List>
             </Box>
             <Box style={{position:'relative'}}>
             <img src={qrcode} alt='qr' className={classname.qrcode}/>
            <Box style={{position:'absolute',left:'50%',top:'50%'}}>
             <GoogleLogin
               clientId={clientid}
               buttonText=""
               isSignedIn={true}
               onSuccess={loginsuccess}
               onFailure={loginFailure}
              cookiePolicy={'single_host_origin'}
              />
              </Box>
              
              
             </Box>
         </Box>
         </>
        </Dialog>
    );
}
export default withStyles(style)(Login);