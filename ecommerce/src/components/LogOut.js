import { useEffect } from "react";
import { useUserContext } from "../context/UserProvider";

var LogOut = () => {
  var { LogOut } = useUserContext();
  console.log(LogOut);

  useEffect(() => {
    LogOut();
    localStorage.clear()
  }, []);
  
  return null;
};

export default LogOut;