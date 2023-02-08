
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAQ6dYbsQbIvWZHAJ_sbnL8uMR_kzsj448",
  authDomain: "kiwtter-4fc53.firebaseapp.com",
  databaseURL: "https://kiwtter-4fc53-default-rtdb.firebaseio.com",
  projectId: "kiwtter-4fc53",
  storageBucket: "kiwtter-4fc53.appspot.com",
  messagingSenderId: "412495957510",
  appId: "1:412495957510:web:7d6223be61a1da53eafd87"

    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

    function addRoom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child("room_name").update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name-"+Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}