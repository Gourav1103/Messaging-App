import { Box, makeStyles, Typography } from "@material-ui/core";
import { useContext } from "react";
import{Account} from '../context/AccountContext';
const useStyle=makeStyles({
 imagecontainer:{
     display:'flex',
     justifyContent:'center'
 },
 displaypictue:{
     width:200,
     height:200,
     borderRadius:'50%',
     padding:'18px 0px'
 },
 nameContainer:{
     background:'#FFF',
     padding:'12px 30px 2px',
     boxShadow:'0px 1px 3px rgba(0,0,0,0.08)',
     '& :first-child':{
       color:'#4D4DFF',
       fontSize:14
     },
     '& :last-child':{
         margin:'14px 0px',
         color:'#4A4A4A'
     }
 },
 description:{
     padding:'10px 20px 28px 30px',
     '& >*':{
         color:'rgba(0,0,100,0.60)',
         fontSize:12
     }

 }
})
const Profile=()=>{
    const {account}=useContext(Account);
    const classes=useStyle();
    return(
        <>
            <Box className={classes.imagecontainer}>
             <img src={account.imageUrl} alt="dp" className={classes.displaypictue}/>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
      
            </Box>
            <Box className={classes.description}>
              <Typography>This is not username or pin. This name will be to visible to your messenging contacts</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>About</Typography>
                <Typography>Hello i am using ChatApp</Typography>

            </Box>
        </>
    );
}
export default Profile;