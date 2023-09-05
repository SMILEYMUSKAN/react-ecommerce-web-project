import { createContext, useContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "../firebase";
import { useHistory }  from "react-router-dom";

var UserContext = createContext({
  user: null,
  error: null,
});

var APP_USER = "APP_USER"

var UserProvider = ({ children }) => {
  var localUser = localStorage.getItem(APP_USER)
  var [user, setUser] = useState(localUser ? JSON.parse(localUser) : null);
  var [error, setError] = useState(null);
  var auth = getAuth(firebaseApp);
  var history = useHistory();
  
  
  const FIREBASE_AUTH_ERRORS = {
    "auth/wrong-password": `Invalid email/password`,
    "auth/user-not-found": `No user found for provided email`,
    "auth/email-already-in-use": "Email already register, do please login",
  };
  

   var saveUser = res => {
         localStorage.setItem(APP_USER, JSON.stringify(res))
         setUser(res)
         history.push("/products")
   }

   
  var doLogin = (email, password) => {
    clearError();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        saveUser(res.user)
        console.log(":: DO Login :: SUCCESS", res);
      })
      .catch((error) => {
        var message = FIREBASE_AUTH_ERRORS[error.code];
        setError(message);
      });
  };

  var doSignUp = (email, password) => {
    clearError();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(":: DO SINGUP :: SUCCESS", res);
        saveUser(res.user);
      })
      .catch((error) => {
        var message = FIREBASE_AUTH_ERRORS[error.code];
        setError(message);
      });
  };

  var LogOut = () => {
    setUser(null);
  };

  var clearError = () => {
    setError(null);
  };
  return (
    <UserContext.Provider
      value={{
        doLogin,
        doSignUp,
        LogOut,
        clearError,
        user,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export var useUserContext = () => useContext(UserContext);
export default UserProvider;
