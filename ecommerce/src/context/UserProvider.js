import { createContext, useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from "../firebase";

var UserContext = createContext({
    user:null,
    error:null
});

var UserProvider = ({children}) => {
   var [user, setUser] = useState(null);
   var [error, setError] = useState(null)
   var auth = getAuth(firebaseApp);

   const FIREBASE_AUTH_ERRORS = {
    'auth/wrong-password': `Invalid email/password`,
    'auth/user-not-found': `No user found for provided email`,
    'auth/email-already-in-use': 'Email already register, do please login'
}

   var doLogin = (email, password) => {
    clearError()
    signInWithEmailAndPassword(auth, email, password)
    .then(res => {
        setUser(res.user)
        console.log(":: DO Login :: SUCCESS", res)
    })
    .catch(error => {
        var message = FIREBASE_AUTH_ERRORS[error.code]
        setError(message)
        
    })

   }

   var doSignUp = (email, password) => {
    clearError()
    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
        console.log(":: DO SINGUP :: SUCCESS", res)
        setUser(res.user)
    })
    .catch(error => {
        var message = FIREBASE_AUTH_ERRORS[error.code]
        setError(message)
   })
   }

   var LogOut = () => {
       setUser(null)
   }

   var clearError = () => {
        setError(null)
   }
    return <UserContext.Provider value={{
        doLogin,
        doSignUp,
        LogOut,
        clearError,
        user,
        error
    }}>

    {children}
    </UserContext.Provider>
}



export var useUserContext = () => useContext( UserContext )
export default UserProvider;