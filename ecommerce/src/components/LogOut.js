import { useEffect } from "react"
import { useUserContext } from "../context/UserProvider";


var LogOut = () => {
    var { LogOut } = useUserContext()
    console.log(LogOut)
    
  useEffect(() => {
    LogOut()
  }, [])
    return null
}

export default LogOut;