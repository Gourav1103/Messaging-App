import { Box, InputBase,makeStyles } from "@material-ui/core";
import{Search as SearchIcon} from '@material-ui/icons';
import { styled,alpha } from "@material-ui/core";
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 18,
     backgroundColor: '#FFFFFF',
     marginLeft:'30px',
    width: '100%',
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
      paddingLeft: 50,
      fontSize:14,
      height:15,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));
const Searching=()=>{  
    return(
      <Box style={{background:"#F6F6F6",height:43,display:'flex',alignItems:'center'}}>
        <Search>
        <SearchIconWrapper>
          <SearchIcon fontSize="small" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search or start the new chat"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      </Box>
    );
}
export default Searching;