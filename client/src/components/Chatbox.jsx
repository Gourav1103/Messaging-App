import { Box, Dialog, makeStyles, Toolbar, withStyles,AppBar,Typography ,Grid} from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import { Account } from "./context/AccountContext";
import Menu from "./menu/Menu";
import Searchinginput from "./Searchinginput";
import{Search as SearchIcon} from '@material-ui/icons';
import { styled,alpha } from "@material-ui/core";
import Right from "./Right";
import {io} from 'socket.io-client';
const useStyle=makeStyles({
    components:{
        display:'flex'
    },
    leftcomponent:{
     minWidth:380
    },
    
        
          
   
})
const style={
    dialogpaper:{
        height:'95%',
        width:'91%',
        boxShadow:'none',
        borderRadius:'0',
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}
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
const Chatapp=({classes})=>{
    const host='http://localhost:8000';
    const socket = useRef();
    const{account} =useContext(Account)
    useEffect(()=>{
     if(account){
         socket.current=io(host);
         socket.current.emit("add-user",account.email);
     }
    },[account])
   const classname=useStyle();
    return(
        
    
        <Dialog
        open={true}
        classes={{paper:classes.dialogpaper}}
        BackdropProps={{style: {backgroundColor:'unset'}}}
        >
            
          
          <Box className={classname.components}>

              <Box className={classname.leftcomponent}>
                <Menu/>
              </Box>
             <Right socket={socket}/>  
          </Box>
         
        </Dialog>
        

    );
}
export default withStyles(style)( Chatapp);