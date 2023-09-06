import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserProvider";
import UITextField from "./UiTextField";
import UIButton from "./UIButton";
import { Redirect } from "react-router-dom";


var AuthenticationView = ({ isLogin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var title = isLogin ? "Login" : "SignUp";
  var { doLogin, doSignUp, error, clearError, user } = useUserContext();

  var HandleAuthentication = (event) => {
    event.preventDefault();
    (isLogin ? doLogin : doSignUp)(email, password);
  };

  useEffect(() => {
    clearError();
  }, [isLogin]);


  if(user) return <Redirect to="/" />

  return (
    <div className="bg-slate-900 max-w-lg mt-4 flex flex-col items-center justify-start mx-auto rounded">
      <form onSubmit={HandleAuthentication} className="flex flex-col gap-5">
        <h1 className="text-4xl text-white italic w-full underline text-center">
          {title}
        </h1>
        {error && (
          <div className="text-red-500 bg-red-200 p-2 m-2 rounded italic">
            {error}
          </div>
        )}
        <label className="italic text-xl text-white mt-10">Email : </label>
        <UITextField
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="p-2 w-72 text-center italic rounded bg-white text-slate-900"
        />
        <label className="italic text-xl text-white">Password : </label>
        <UITextField
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          className="p-2 w-72 text-center italic rounded bg-white text-slate-900"
        />
        <button className="bg-white  text-center  text-slate-900 rounded italic w-32 p-3 mt-10 ml-20 mb-4">{title}</button>
      </form>
    </div>
  );
};

export default AuthenticationView;
