import Conversation from "./Conversation";
import Header from "./Header";
import Searching from "./Searching";
import{Grid} from '@material-ui/core'

const Menu=()=>{
    return(
        
        <>
        <Header/>
        <Searching/>
        <Conversation/>
        </>
       
    );
}
export default Menu;