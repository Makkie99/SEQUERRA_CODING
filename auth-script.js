import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQE0KvOLD_eFLuBi5MjH6z-R6sGRMiMHk",
  authDomain: "laroshi.firebaseapp.com",
  databaseURL: "https://laroshi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "laroshi",
  storageBucket: "laroshi.firebasestorage.app",
  messagingSenderId: "394806848386",
  appId: "1:394806848386:web:1077c583db2c178b2e7d9b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

secretContent.style.display = "none";

const userSignUp = async () => {
  const signUpEmail = userEmail.value;
  const signUpPassword = userPassword.value;
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
    const user = userCredential.user;
    console.log(user);
    Swal.fire("Your Account is successfully created!");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    Swal.fire("Error", errorMessage, "error");
  }
};

const userSignIn = async () => {
  const signInEmail = userEmail.value;
  const signInPassword = userPassword.value;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
    const user = userCredential.user;
    Swal.fire("You have signed in successfully!");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    Swal.fire("Error", errorMessage, "error");
  }
};

const checkAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      authForm.style.display = "none";
      secretContent.style.display = "block";
    } else {
      authForm.style.display = "block";
      secretContent.style.display = "none";
    }
  });
};

const userSignOut = async () => {
  try {
    await signOut(auth);
    Swal.fire("User Logout");
  } catch (error) {
    console.error("Sign out error:", error);
  }
};

checkAuthState();


signUpButton.addEventListener("click", userSignUp);
signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);