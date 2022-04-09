import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';
const auth = getAuth(app);
const googleAuthProvider =  new GoogleAuthProvider()

const useFirebase = ()=>{
    const [user,setUser] = useState({});
    useEffect(()=>{

    },[]);

    const handleSignOut =()=>{
        signOut(auth).then(() => {
         setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    
    
    const signinwithgoogle = ()=>{
        signInWithPopup(auth,googleAuthProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            
            const user = result.user;
            setUser(user);
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode);
            
            // ...
          });
    };

    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            setUser(user)
        })
    },[])
    return {user,signinwithgoogle,handleSignOut}
}

export default useFirebase;