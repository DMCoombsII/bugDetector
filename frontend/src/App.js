import React from "react";
import {useSelector} from 'react-redux'
import Login from './views/Components/Login/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './views/sidebar/sidebar'
import ViewBugPage from './views/Pages/viewBugs'

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> :
    <>
    <Sidebar />
    <Routes>
        <Route path="/viewbugs" element={<ViewBugPage/>} />
    </Routes>
    </>
    }
    </Router>
  );
}

export default App;
