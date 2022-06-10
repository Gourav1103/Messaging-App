import { createContext, useState } from "react";

export const User = createContext(null);
const UserContext=({children})=>{
    const [user,setUser]=useState();
    
    return(
    <User.Provider
    value={{ user,
        setUser}}
    >
       
      {children}
      </User.Provider>  
    );
}
export default UserContext;