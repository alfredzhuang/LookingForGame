import React from 'react';
import Navbar from "../navbar/Navbar";
import firebase from 'firebase';
import "firebase/firestore";

let img = document.getElementById('img')
let file = {};

function chooseFile(e) {
    let file = e.target.files[0];

    firebase
        .app()
        .storage()
        .ref('images')
        .child(file.name)
        .put(file);
    }

function getAnImage() {

    firebase
        .storage()
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then(imgUrl => {
        console.log(imgUrl);
        });
    }
//export default Profile;