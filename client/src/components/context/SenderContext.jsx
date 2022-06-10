import { createContext, useState } from "react";

export const Sender = createContext(null);
const SenderContext=({children})=>{
    const [sender,setUser]=useState();
    
    return(
    <Sender.Provider
    value={{ sender,
        setUser}}
    >
       
      {children}
      </Sender.Provider>  
    );
}
export default SenderContext;