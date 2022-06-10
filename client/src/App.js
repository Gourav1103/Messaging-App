import AccountContext from "./components/context/AccountContext";
import Messenger from "./components/Messenger";
import TemplateProvider from "./Templetes/TemplateProvider";
import { Route,Routes,Router } from 'react-router-dom';
import Conversation from "./components/menu/Conversation";
import UserContext from "./components/context/UserContexct";
import SenderContext from "./components/context/SenderContext";

function App() {
  return (
    <div >
      
      <TemplateProvider>
        <UserContext>
         <AccountContext>
          <SenderContext>
          <Messenger/>
          
        </SenderContext>
          </AccountContext>
          </UserContext>
          </TemplateProvider>
             
    </div>
  );
}

export default App;
