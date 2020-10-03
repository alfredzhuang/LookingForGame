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
import { v4 as uuidv4 } from 'uuid';


function App() {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [userData, getUserDate] = useState("[]");
  let [username, setUserName] = useState("");
  let [name, setName] = useState("");
  let [game, setGame] = useState("");
  let [discord, setDiscord] = useState("");
  let [description, setDescription] = useState("");
  let uid;
  
  let db = firebase.firestore();

  let createGroup = () => {
    let owner = user ? user.uid : 'unknown';
    let ownerEmail = user ? user.email : 'unknown';
    let group = {
      owner,
      ownerEmail,
      name,
      id: uuidv4(),
      game,
      discord,
      description,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
    db.collection(game).doc(group.id).set(group).catch((err) => {
      console.log(err);
    });
    db.collection("userData").doc(group.owner).collection("groups").doc(group.id).set({name: group.name}).then(data => {
      window.location = "homepage";
    }).catch((err) => {
      console.log(err);
    });
  };

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
        <Route path='/create' exact render={() => 
        <Create
        createGroup = {createGroup}
        name = {name}
        setName = {setName}
        game = {game}
        setGame = {setGame}
        discord = {discord}
        setDiscord = {setDiscord}
        description = {description}
        setDescription = {setDescription}
        ></Create>}/>
        <Route path='/findgroup' exact component={FindGroup}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
