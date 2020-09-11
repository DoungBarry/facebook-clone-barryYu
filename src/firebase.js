import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHVLn9OwjrUJJe-u6SLfNyajWfawnFcRo",
  authDomain: "cool-remote.firebaseapp.com",
  databaseURL: "https://cool-remote.firebaseio.com",
  projectId: "cool-remote",
  storageBucket: "cool-remote.appspot.com",
  messagingSenderId: "296768918645",
  appId: "1:296768918645:web:3af5a398e8eee5fc0a943c",
};

//先定義出“應用程式”
// 前端反映到後端,,定義ＡＰＰ＝firebase的ＡＰＰ啟動器（ 置入消防氣設定 ）
const firebaseApp = firebase.initializeApp(firebaseConfig);

//定義 fireStore的數據庫 （ 從應用程式內的函式庫嵌入的firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();

//New auth from google povider
const provider = new firebase.auth.GoogleAuthProvider();

//設定到這等於完成啟動器-- open tour firebase website =>cloud store

export { auth, provider };
//導出認證和估格的認證

export default db;
//export db 導出數據庫
