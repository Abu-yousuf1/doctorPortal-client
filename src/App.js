import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Apponintment/Appointment';
import Login from './components/Login/Login/Login';
import { create } from 'istanbul-reports';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path= "/">
        <Home></Home>
        </Route>
        <Route path = "/appointment">
          <Appointment/>
        </Route>
        <Route path = "/dashboard/appointment">
          <Dashboard/>
        </Route>
        <Route path = "/dashboard/allPatients">
          <AllPatients/>
        </Route>
        <Route path ="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
      
    
  );
}

export default App;
