
var app_fireBase={};

(function(){
var config = {
    apiKey: "AIzaSyApSOBkKrpZOPraclKMO1p_J7s5OeiAScY",
    authDomain: "loginwebsite-9e40c.firebaseapp.com",
    databaseURL: "https://loginwebsite-9e40c.firebaseio.com",
    projectId: "loginwebsite-9e40c",
    storageBucket: "loginwebsite-9e40c.appspot.com",
    messagingSenderId: "168382613621"
  };
  firebase.initializeApp(config);

  app_fireBase =firebase;
})()