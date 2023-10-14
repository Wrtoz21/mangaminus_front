import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();




export default function AuthContextProvider({children}){
    const [authUser,setAuthUser] = useState(null); //authUser
    const [initialLoading,setInitialLoading] = useState(true)
    useEffect(() =>{
        if(getAccessToken()){
            axios
            .get('/user/me')
            .then(res =>{
                setAuthUser(res.data.user)
            })
            .finally(() =>{
                setInitialLoading(false)
            })
        }else{
            setInitialLoading(false)
        }
    },[])
    const registerAPI = async registerDataObject => {
        const res = await axios.post('/user/register',registerDataObject);
        setAuthUser(res.data.user)
        // console.log(res)
        
    }
    const login = async userCredential => {
        const res = await axios.post('/user/login',userCredential)
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)
    }

    const logout = () => {
        removeAccessToken();
        setAuthUser(null)
    }
    return (
        <AuthContext.Provider value={{registerAPI,login,authUser,logout,initialLoading}}>{children}</AuthContext.Provider>
    );
}