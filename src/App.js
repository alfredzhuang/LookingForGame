import React from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import Homepage from "./components/pages/Homepage";
import Explore from "./components/pages/Explore";
import Browse from "./components/pages/Browse";
import Create from "./components/pages/Create";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/login' exact component={Login} />
        <Route path='/home' exact component={Homepage} />
        <Route path='/explore' exact component={Explore} />
        <Route path='/browse' exact component={Browse} />
        <Route path='/create' exact component={Create} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
