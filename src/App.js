import React, { Component, useEffect, useState  } from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import Homepage from "./components/pages/Homepage";
import Browse from "./components/pages/Browse";
import Create from "./components/pages/Create";
import FindGroup from "./components/pages/FindGroup";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase from './firebase';


function App() {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [userData, getUserDate] = useState("[]");
  let [username, setUserName] = useState("");
  let uid;
  
  let db = firebase.firestore();

  let getUserData = () => {};

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
     .then(data => {
       window.location="homepage";
     })
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
    // console.log("logged in");
  };

  let signUp = () => {
    clearErrors();
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(data => {
      firebase.auth().onAuthStateChanged(user => {
        uid = user.uid;
        db.collection("userData").doc(uid).set({username}).then(data => {
          window.location = "homepage";
        }).catch((err) => {
          console.log(err);
        });
      });
      }
    )
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

  let authState = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearEmailandPassword();
        setUser(user);
        uid = user.uid;
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
        <Route path='/signup' exact render={() =>
        <Signup 
        username = {username}
        setUserName = {setUserName}
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        signUp = {signUp}
        emailError = {emailError}
        passwordError = {passwordError}
        ></Signup>}/>
        <Route path='/login' exact render={() => 
        <Login
        email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          signIn = {signIn}
          emailError = {emailError}
          passwordError = {passwordError}
        ></Login>}/>
        <Route path='/homepage' exact component={Homepage}/>
        <Route path='/browse' exact component={Browse}/>
        <Route path='/create' exact component={Create}/>
        <Route path='/findgroup' exact component={FindGroup}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
