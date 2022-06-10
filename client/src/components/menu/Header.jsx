import { Box, makeStyles } from "@material-ui/core";
import {Chat} from '@material-ui/icons';
import { useContext } from "react";
import { Account } from "../context/AccountContext";
import Headermenu from "./Headermenu";
import { useState } from "react";
import Profiled from "../Drawer/Profiled";
const useStyle=makeStyles({
    header:{
        height:35,
        background:'#ededed',
        padding:"10px 16px",
        display:'flex',
        alignItems:'center'
    },
    image:{
        height:37,
        width:37,
        borderRadius:'50%',
    
    },
    icons:{
    marginLeft:'auto',
    '&>*':{
        marginLeft:2,
        padding:6,
        color:'#919191'
    },
    
    }
});

const Header=()=>{
    const {account}=useContext(Account);
    const classes=useStyle();
    const[open,setOpen]=useState(false);
    const toggleHandler=()=>{
        setOpen(true);
    }
    return(
        <>
        <Box className={classes.header}>
            <img src={account.imageUrl} onClick={toggleHandler} alt="display" className={classes.image}/>
            <Box className={classes.icons}>
             <Chat style={{ fontSize:22,marginRight:8}}/>
             <Headermenu/>
            </Box>
        </Box>
        <Profiled open={open} setOpen={setOpen}/>
        </>
    );
}
export default Header;