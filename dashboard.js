//The recommended way to get the current user is by setting an observer on the Auth object:
var dashboard= {};

(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid=user.uid;
    } else {
      // No user is signed in.
      window.location.replace("index.html");
    }
  });


  function logOut(){
      firebase.auth().signOut();
  }

  dashboard.logOut = logOut;



})()



