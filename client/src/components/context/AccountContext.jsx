import { createContext, useState } from "react";

export const Account = createContext(null);
const AccountContext=({children})=>{
    const [account,setAccount]=useState();
    
    return(
    <Account.Provider
    value={{ account,
        setAccount}}
    >
       
      {children}
      </Account.Provider>  
    );
}
export default AccountContext;