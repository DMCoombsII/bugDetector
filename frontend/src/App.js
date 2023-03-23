import React from "react";
import {useSelector} from 'react-redux'
import Login from './views/Login/login'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './views/sidebar/sidebar'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> :
    <>
    <Sidebar />
    </>
    }
    </Router>
  );
}

export default App;
