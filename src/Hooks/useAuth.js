import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useAuth = () => {
    // context use here
    return useContext(AuthContext);
}
export default useAuth;
