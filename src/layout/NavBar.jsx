import { useState, useEffect } from "react";
import LoginBox from "../authen/LoginBox";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../hooks/get-user";
import { addAccessToken } from "../utils/local-storage";

export default function NavBar() {
    const Navigate = useNavigate();
    const hanldleClickToRegister = () => { return Navigate("/register") }
    const hanldleClickToHome = () => { return Navigate("/") }
    const [loginBoxOpen, setLoginBoxOpen] = useState(false)
    const { authUser, logout } = getUser()
   
 

    return (
        <div className="bg-[#C93800] grid grid-cols-6 justify-items-center text-2xl py-2"  >
            <button onClick={hanldleClickToHome} className="items-center">Home</button>
            <div>New Manga</div>
            <div>Hot Manga</div>
            <div>New Manga</div>
            {authUser ?
                <>
                    <Link to={`/user/${authUser.id}`}>{authUser.username}</Link>
                    <button onClick={logout} className={`${!loginBoxOpen || 'hidden' && location.reload()}`}>
                        Logout</button>
                </>
                :
                <>
                    <button onClick={(e) => 
                        setLoginBoxOpen(true)}>Login</button>
                    {loginBoxOpen && <LoginBox
                        className='cursor-pointer'
                        onClose={() => setLoginBoxOpen(false)} />}
                    <button onClick={hanldleClickToRegister}>Register</button>
                </>
            }
            
        </div>)
}