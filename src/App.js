import React, { useEffect, useState  } from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Signup from "./components/pages/auth/Signup";
import Login from "./components/pages/auth/Login";
import Homepage from "./components/pages/Homepage";
import Browse from "./components/pages/Browse";
import Create from "./components/pages/Create";
import League from "./components/pages/games/League";
import Among from "./components/pages/games/Among";
import Genshin from "./components/pages/games/Genshin";
import Smash from "./components/pages/games/Smash";
import Valorant from "./components/pages/games/Valorant";
import Minecraft from "./components/pages/games/Minecraft";
import Phasmophobia from "./components/pages/games/Phasmophobia";
import Group from "./components/pages/Group"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase from './firebase';
import { storage } from './firebase';
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [userData, setUserData] = useState([]);
  let [groupData, setGroupData] = useState([]);
  let [username, setUserName] = useState("");
  let [gameGroup, setGameGroup] = useState([]);
  let [name, setName] = useState("");
  let [game, setGame] = useState("");
  let [discord, setDiscord] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState(null);
  let [url, setUrl] = useState("");
  let uid;


  let changeFile = e => {
    if(e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  let db = firebase.firestore();

   let getGameGroupGenshin = () => {
       db.collection("Genshin").onSnapshot((querySnapshot) => {
         let items = [];
         querySnapshot.forEach((doc) => {
           items.push(doc.data());
         })
         setGameGroup(items);
       });
   }
   let getGameGroupLeague = () => {
    db.collection("LeagueofLegends").onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      })
      setGameGroup(items);
    });
}
let getGameGroupMinecraft = () => {
  db.collection("Minecraft").onSnapshot((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
    setGameGroup(items);
  });
}
let getGameGroupValorant = () => {
  db.collection("Valorant").onSnapshot((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
    setGameGroup(items);
  });
}
let getGameGroupSmash = () => {
  db.collection("Smash").onSnapshot((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
    setGameGroup(items);
  });
}
let getGameGroupPhasmophobia = () => {
  db.collection("Phasmophobia").onSnapshot((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
    setGameGroup(items);
  });
}
let getGameGroupAmongUs = () => {
  db.collection("AmongUs").onSnapshot((querySnapshot) => {
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
    setGameGroup(items);
  });
}

  let getGroupData = () => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
      db.collection("userData").doc(uid).collection("groups").onSnapshot((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        })
        setGroupData(items);
      });
    });
  }

  let getUserData = () => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
      db.collection("userData").doc(uid).get().then((doc) => {
        let items = [];
        items.push(doc.data());
        setUserData(items[0]);
      })
    });
  }

  let joinGroupGenshin = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("Genshin").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupLeague = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("LeagueofLegends").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupAmongUs = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("AmongUs").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupMinecraft = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("Minecraft").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupPhasmophobia = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("Phasmophobia").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupSmash = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("Smash").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let joinGroupValorant = (groupid) => {
    firebase.auth().onAuthStateChanged(user => {
      uid = user.uid;
    db.collection("Valorant").where('id', '==', groupid).onSnapshot((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
        console.log(uid);
        console.log(items[0].id);
        db.collection("userData").doc(uid).collection("groups").doc(items[0].id).set(items[0]).then(data => {
          alert(items[0].discord);
        }).catch((err) => {
          console.log(err);
        });
      });
    }); 
  });
  }

  let createGroup = () => {
    let owner = user ? user.uid : 'unknown';
    let ownerEmail = user ? user.email : 'unknown';
    let group = {
      url,
      owner,
      ownerEmail,
      name,
      id: uuidv4(),
      game,
      discord,
      description,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }
    storage.ref(game).child(group.id + "/image.jpg").put(image).then(() => {
    storage.ref(game).child(`${group.id}/image.jpg`).getDownloadURL().then(url => 
        { 
          setUrl(url);
          group.url = url;
          db.collection(game).doc(group.id).set(group).catch((err) => {
            console.log(err);
          });
        });
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

        storage.ref("users").child(user.uid + "/profile.jpg").put(image).then(() => {
        storage.ref("users").child(`${user.uid}/profile.jpg`).getDownloadURL().then(url => 
            { 
              setUrl(url);
              db.collection("userData").doc(uid).set({username, url}).then(data => {
                window.location = "homepage";
              }).catch((err) => {
                console.log(err);
              });
            });
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

  let keyPressSignIn = (event) => {
    if(event.key === 'Enter') {
      signIn();
    }
  };

  let keyPressSignUp = (event) => {
    if(event.key === 'Enter') {
      signUp();
    }
  };

  useEffect(() => {
    authState();
    getUserData();
    getGroupData();
  }, []);


  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact render={() =>
        <Signup 
        keyPressSignUp = {keyPressSignUp}
        changeFile = {changeFile}
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
        keyPressSignIn = {keyPressSignIn}
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        signIn = {signIn}
        emailError = {emailError}
        passwordError = {passwordError}
        ></Login>}/>
        <Route path='/homepage' exact render={() => 
        <Homepage
        groupData = {groupData}
        userData = {userData}
        ></Homepage>}/>
        <Route path='/browse' exact render={() => 
        <Browse
        getGameGroupGenshin = {getGameGroupGenshin}
        getGameGroupValorant = {getGameGroupValorant}
        getGameGroupLeague = {getGameGroupLeague}
        getGameGroupSmash = {getGameGroupSmash}
        getGameGroupPhasmophobia = {getGameGroupPhasmophobia}
        getGameGroupMinecraft = {getGameGroupMinecraft}
        getGameGroupAmongUs = {getGameGroupAmongUs}
        userData = {userData}
        ></Browse>}/>
        <Route path='/create' exact render={() => 
        <Create
        userData = {userData}
        changeFile = {changeFile}
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
        <Route path='/AmongUs' exact render={() => 
        <Among
        gameGroup = {gameGroup}
        userData = {userData}
        ></Among>}/>
        <Route path='/GenshinImpact' exact render={() => 
        <Genshin
        gameGroup = {gameGroup}
        userData = {userData}
        ></Genshin>}/>
         <Route path='/LeagueOfLegends' exact render={() => 
        <League
        gameGroup = {gameGroup}
        userData = {userData}
        ></League>}/>
        <Route path='/Minecraft' exact render={() => 
        <Minecraft
        gameGroup = {gameGroup}
        userData = {userData}
        ></Minecraft>}/>
         <Route path='/Smash' exact render={() => 
        <Smash
        gameGroup = {gameGroup}
        userData = {userData}
        ></Smash>}/>
        <Route path='/Phasmophobia' exact render={() => 
        <Phasmophobia
        gameGroup = {gameGroup}
        userData = {userData}
        ></Phasmophobia>}/>
        <Route path='/Valorant' exact render={() => 
        <Valorant
        gameGroup = {gameGroup}
        userData = {userData}
        ></Valorant>}/>
         <Route path='/group' exact render={() => 
        <Group></Group>}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
