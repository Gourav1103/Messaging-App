
import { ThemeProvider,createMuiTheme, createTheme } from "@material-ui/core";
import { createContext } from "react";
export const templatecontext=createContext(null);
const TemplateProvider=({children})=>{
    const theme=createTheme({
     overrides:{
        MuiDrawer:{
            paperAnchorLeft:{
                height:'95%',
                top:17,
                left:62,
                width:'24%',
                boxShadow:'none'
            }
        },
        MuiBackdrop:{
            root:{
                backgroundColor:'unset'
            }
        }
     }
    })
    return(
        <templatecontext.Provider>
          <ThemeProvider theme={theme}>
           {children}
          </ThemeProvider>
        </templatecontext.Provider>
    );
}
export default TemplateProvider;