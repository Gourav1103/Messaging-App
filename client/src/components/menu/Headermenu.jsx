
import { MoreVert } from "@material-ui/icons";
import { Menu,MenuItem,makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { clientid } from "../constents/Constents";
import { Account } from "../context/AccountContext";
import Profiled from "../Drawer/Profiled";
const useStyle=makeStyles({
  menuitems:{
    fontSize:14,
    padding:'15px 64px 5px 24px ',
    color:'#4A4A4A'

  },
  Logout:{
  border:'none!important',
  boxShadow:'none!important',
  '& >*':{
    padding:'0px!important'
  }
  }
})
const Headermenu=()=>{
    const[open,setOpen]=useState(false);
    const{setAccount}=useContext(Account);
    const[openProfile,setOpenProfile]=useState(false);
    const classes=useStyle();
    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(event)=>{
       setOpen(event.currentTarget); 
    }

    const logoutsuccess=()=>{
      alert("You have been Logout Successfully");
      console.clear();
      setAccount('');
    }
    const toggleHandler=()=>{
      setOpenProfile(true);
    }
    return(
         <>
         <MoreVert onClick={handleClick}/>
         <Menu
         anchorEl={open}
         keepMounted
         open={Boolean(open)}
         onClose={handleClose}
         getContentAnchorEl={null}
         anchorOrigin={{
           vertical:'bottom',
           horizontal:'center'
         }}
         transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
       >
         <MenuItem onClick={()=>{handleClose(); toggleHandler()}} className={classes.menuitems}>Profile</MenuItem>
         <MenuItem onClick={handleClose} className={classes.menuitems}>
           <GoogleLogout
           clientId={clientid}
           buttonText="LogOut"
           onLogoutSuccess={logoutsuccess}
           className={classes.Logout}
           />
         </MenuItem>
       </Menu>
       <Profiled open={openProfile} setOpen={setOpenProfile}/>
       </>
    );
}
export default Headermenu;