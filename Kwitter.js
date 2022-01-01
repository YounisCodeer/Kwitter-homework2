
const firebaseConfig = {
    apiKey: "AIzaSyDLe2Ue2qNPz5uf8JcSji_ZUczMU32QMss",
    authDomain: "kwitter-homework-2907a.firebaseapp.com",
    databaseURL: "https://kwitter-homework-2907a-default-rtdb.firebaseio.com",
    projectId: "kwitter-homework-2907a",
    storageBucket: "kwitter-homework-2907a.appspot.com",
    messagingSenderId: "549466745369",
    appId: "1:549466745369:web:c5d234a48e525236611888",
    measurementId: "G-FKNRMVQ685"
  };

function add_user()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    });
}