// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import  {getAuth , createUserWithEmailAndPassword , signOut , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkGszuBdyX8ZBwdPNygLfEkR6b1tpQtHA",
  authDomain: "cp-community-5c382.firebaseapp.com",
  projectId: "cp-community-5c382",
  storageBucket: "cp-community-5c382.appspot.com",
  messagingSenderId: "1088755596953",
  appId: "1:1088755596953:web:d2cb23e4b145bbb1410208"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth= getAuth(app)

// const signupForm = document.querySelector('.signup')
// signupForm.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     const email = signupForm.email.value
//     const password = signupForm.password.value


//     createUserWithEmailAndPassword(auth,email,password)
//     .then((cred) => {
//         console.log('user created:',cred.user)
//         signupForm.reset()
//         window.location.href='/html/index2.html';
//     })
    
//     .catch((err) =>{
//         console.log(err.message)
//     })
    
// })

// // Signin and logging out
// const logoutButton =document.querySelector('.logout')
// logoutButton.addEventListener('click' , () =>{
//     signOut(auth)
//     .then(()=>{
//         console.log('the user signed out')
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// })

// const loginForm = document.querySelector('.signin')
// loginForm.addEventListener('submit' , (e)=>{
//     e.preventDefault()

//     const email=loginForm.email.value
//     const password = loginForm.password.value


//     signInWithEmailAndPassword(auth,email,password)
//     .then((cred)=>{
//         console.log('user logged in' , cred.user)
//         window.location.href='/html/index2.html';

//     })
//     .catch((err)=>{
//         console.log(err.message)

//     })
// })