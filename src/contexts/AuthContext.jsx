import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";


export const AuthContext = createContext();




export default function AuthContextProvider({ children }) {
    const [authUser, setAuthUser] = useState(null); //authUser
    const [initialLoading, setInitialLoading] = useState(true)
    const [admin, setAdmin] = useState([])
    const [manga, setManga] = useState([])
    const [userWallet, setUserWallet] = useState({})
    const [payment, setPayment] = useState([])
    useEffect(() => {
        if (getAccessToken()) {
            axios
                .get('/user/me')
                .then(res => {
                    setAuthUser(res.data.user)
                    setAdmin(res.data.findAdmin)
                    setUserWallet(res.data.wallet)
                    setPayment(res.data.payment)
                })
                .finally(() => {
                    setInitialLoading(false)
                })
        } else {
            setInitialLoading(false)
        }

        axios.get('/manga/mangaAll')
            .then((res) => {
                setManga(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
        ;
        // axios.get('/manga/mangaAll').then(res => {
        //     setManga(res.data.manga)
        // })
    }, [])
    const registerAPI = async registerDataObject => {
        const res = await axios.post('/user/register', registerDataObject);
        setAuthUser(res.data.user)
        // console.log(res)

    }
    const login = async userCredential => {
        const res = await axios.post('/user/login', userCredential)
        addAccessToken(res.data.accessToken)
        setAuthUser(res.data.user)
    }

    const logout = () => {
        removeAccessToken();
        setAuthUser(null)
    }

    const uploadAPI = async data => {
        const res = await axios.post('/coin-exchange/payment', data)
        console.log(res.data)
    }

    const uploadByADMIN = async input => {
        const res = await axios.post('/admin/upload', input)
    }
    const  uploadEpisode = async input => {
        const res = await axios.post('/admin/uploadEpisode', input)
    }

    const uploadCoin = async input => {
        const res = await axios.patch('/admin/uploadEpisode', input)
    }

    const downloadData = async () => {
        try {
            const res = await axios.get('/manga/mangaAll');
            setManga(res.data);
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <AuthContext.Provider value={{ registerAPI, login, authUser, logout, initialLoading, uploadAPI, uploadEpisode,admin, uploadByADMIN, uploadCoin, userWallet, payment,manga,downloadData }}>{children}</AuthContext.Provider>
    );
}