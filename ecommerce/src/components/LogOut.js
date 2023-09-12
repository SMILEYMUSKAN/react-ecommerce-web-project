import { useEffect } from "react";
import { useUserContext } from "../context/UserProvider";
import { useHistory } from "react-router-dom";

var LogOut = () => {
  var { LogOut } = useUserContext();
  var history = useHistory()
  console.log(LogOut);

  useEffect(() => {
    LogOut();
    localStorage.clear()
    history.push("/login")
  }, []);
  
  return null;
};

export default LogOut;