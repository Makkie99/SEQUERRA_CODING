var firebaseConfig = {
  apiKey: "AIzaSyBQE0KvOLD_eFLuBi5MjH6z-R6sGRMiMHk",
  authDomain: "laroshi.firebaseapp.com",
  databaseURL: "https://laroshi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "laroshi",
  storageBucket: "laroshi.firebasestorage.app",
  messagingSenderId: "394806848386",
  appId: "1:394806848386:web:1077c583db2c178b2e7d9b"
};

firebase.initializeApp(firebaseConfig);

console.log("Firebase initialized:", firebase.apps.length > 0);
