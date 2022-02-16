const firebaseConfig = {
    apiKey: "AIzaSyAFJTHbawTSD1vw2IT50Eat5lkHuJxQlW0",
  authDomain: "pirates-chat-d8e00.firebaseapp.com",
  projectId: "pirates-chat-d8e00",
  storageBucket: "pirates-chat-d8e00.appspot.com",
  messagingSenderId: "623862060797",
  appId: "1:623862060797:web:19809d01227cf0bf1f5094",
  measurementId: "G-9ZDRSV4RB4"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
const fetchChat = db.ref("links/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
    const msg = "<div class=\"my\"> <a href=\""+ messages.msg +"\"> "+ messages.usr + " <a/></div>";
    document.getElementById("messages").innerHTML += msg;
});
