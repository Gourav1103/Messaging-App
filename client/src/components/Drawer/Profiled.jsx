import { Box, Drawer, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";

const useStyle=makeStyles({
    header:{
     background:'#4D4DFF',
     height:101,
     color:'#fff',
     display:'flex',
     '& > *':{
         marginTop:'auto',
         padding:15,
         fontWeight:600
     }
    },
    profile:{
        background:'#ededed',
        height:'90%'
    }
})
const Profiled=({open,setOpen})=>{
    const classes=useStyle();
    return (
        <Drawer open={open} onClose={()=> setOpen(false)}>
            <Box className={classes.header}>
                <ArrowBack onClick={()=>setOpen(false)}/>
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.profile}>
                <Profile />
            </Box>
          </Drawer>  
    )
}
 export default Profiled;