import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();




export default function AuthContextProvider({children}){

    const [getUser,setGetUser] = useState(null); //authUser

    // useEffect(() =>{
    //     if(getAccessToken()){
    //         axios
    //         .get('/user/me')
    //         .then(res =>{
    //             setGetUser(res.data.user)
    //         })

    //     }
    // })

    const registerAPI = async registerDataObject => {
        const res = await axios.post('/user/register',registerDataObject);
        setGetUser(res.data.user)
        // console.log(res)
        
    }
    const login = async userCredential => {
        const res = await axios.post('/user/login',userCredential)
        addAccessToken(res.data.addAccessToken)
        setGetUser(res.data.user)
        // console.log(res)
    }
    return (
        <AuthContext.Provider value={{registerAPI,login}}>{children}</AuthContext.Provider>
    );
}