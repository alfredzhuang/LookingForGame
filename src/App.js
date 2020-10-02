import React, { useEffect, useState  } from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './firebase';


function App() {

  let renderMergedProps = (component, ...rest) => {
    let finalProps = Object.assign({}, ...rest);
    return (
      React.createElement(component, finalProps)
    );
  }
  
  let PropsRoute = ({ component, ...rest }) => {
    return (
      <Route {...rest} render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
      }}/>
    );
  }


  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  
  let clearEmailandPassword = () => {
    setEmail('');
    setPassword('');
  };

  let clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  let signIn = () => {
    clearErrors();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/user-not-found":
        case "auth/invalid-email":
        case "auth/user-disabled":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  let signUp = () => {
    clearErrors();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  let logOut = () => {
    firebase.auth().signOut();
  }

  let authState = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearEmailandPassword();
        setUser(user);
      }
      else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authState();
  }, []);


  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <PropsRoute path='/signup' component={Signup} 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          signUp = {signUp}
          emailError = {emailError}
          passwordError = {passwordError}/>
        <PropsRoute path='/login' component={Login} 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          signIn = {signIn}
          emailError = {emailError}
          passwordError = {passwordError}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
