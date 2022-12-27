import { useState } from 'react';
import './App.css';
import { AppContext } from './context/context';
import AppRouters from './routers/appRouters';


function App() {
  const [user,setUser] = useState({name:"nehoray",age:21});
 
  return (
    <div >
      <AppContext.Provider value = {(
        setUser,user
      )}>
      <AppRouters />
      </AppContext.Provider>
    </div>
  );
}

export default App;
