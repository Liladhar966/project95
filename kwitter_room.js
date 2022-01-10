
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAde3AmmQXoERTNWRcj2zStZ2l85Mu0Kpg",
      authDomain: "lets-chat-app-35c18.firebaseapp.com",
      projectId: "lets-chat-app-35c18",
      storageBucket: "lets-chat-app-35c18.appspot.com",
      messagingSenderId: "897372857001",
      appId: "1:897372857001:web:dc2ec77644c52f196c3fb8"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      }); 
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("room name- "+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location="kwitter_page.html";
}
