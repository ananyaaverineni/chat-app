// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDfC51_kz4qyCejDaome2pClaLKPn40p8Q",
      authDomain: "chat-app-63d39.firebaseapp.com",
      databaseURL: "https://chat-app-63d39-default-rtdb.firebaseio.com",
      projectId: "chat-app-63d39",
      storageBucket: "chat-app-63d39.appspot.com",
      messagingSenderId: "847721008720",
      appId: "1:847721008720:web:275c280568c0ff62af0b55"
    }; var firebaseConfig = {
      apiKey: "AIzaSyDfC51_kz4qyCejDaome2pClaLKPn40p8Q",
      authDomain: "chat-app-63d39.firebaseapp.com",
      databaseURL: "https://chat-app-63d39-default-rtdb.firebaseio.com",
      projectId: "chat-app-63d39",
      storageBucket: "chat-app-63d39.appspot.com",
      messagingSenderId: "847721008720",
      appId: "1:847721008720:web:275c280568c0ff62af0b55"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
