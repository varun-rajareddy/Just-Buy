firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.

    // document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;

      window.location.href = "./equipment.html"
      // document.location='./equipment.html'

      //window.open('./equipment.html','_self');
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.location = "./index.html"


  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}


function signUp() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  const promise = firebase.auth().createUserWithEmailAndPassword(userEmail, userPass);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}


function logout() {
  firebase.auth().signOut();
  // window.open('./index.html');
}
