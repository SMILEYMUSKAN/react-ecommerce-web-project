import { useState } from "react";
import { firebaseApp } from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

var AuthenticationView = ({ isLogin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var title = isLogin ? "Login" : "SignUp";
  var HandleAuthentication = (event) => {
    event.preventDefault();
    var auth = getAuth(firebaseApp);
    if (isLogin) {
      // Login
      signInWithEmailAndPassword(auth, email, password).then((res) =>
        console.log(res, ":: LOGIN RESPONSE ::")
      );
    } else {
      // signUp
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => console.log(res, "SIGNUP RESPONSE ::"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start">
      <form onSubmit={HandleAuthentication} className="flex flex-col gap-5">
        <h1 className="text-5xl text-slate-900 italic w-full underline ml-20">
          {title}
        </h1>
        <label className="italic text-xl text-slate-900 mt-10">Email : </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 w-72 text-center italic rounded bg-slate-900 text-white"
        />
        <label className="italic text-xl text-slate-900">Password : </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="p-2 w-72 text-center italic rounded bg-slate-900 text-white"
        />
        <button className="bg-slate-900  text-center  text-white rounded italic w-32 p-3 mt-10 ml-20">
          {title}
        </button>
      </form>
    </div>
  );
};

export default AuthenticationView;
