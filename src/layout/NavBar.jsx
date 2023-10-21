import { useState, useEffect } from "react";
import LoginBox from "../authen/LoginBox";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../hooks/get-user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faRightFromBracket, faRegistered } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const Navigate = useNavigate();
    const hanldleClickToRegister = () => { return Navigate("/register") }
    const hanldleClickToHome = () => { return Navigate("/") }
    const hanldleClickToExchange = () => { return Navigate("/exchange-rate") }
    const [loginBoxOpen, setLoginBoxOpen] = useState(false)
    const { authUser, logout } = getUser()



    return (
        <div className="bg-[#C93800] grid grid-cols-6 justify-items-center text-2xl py-2"  >
            <button onClick={hanldleClickToHome} className="items-center flex  gap-4">
                <FontAwesomeIcon icon={faHome} />
                <div>Home </div></button>
            <div>New Manga</div>
            <div>Hot Manga</div>
            <button onClick={hanldleClickToExchange}>ExchangeRate</button>
            {authUser ?
                <>
                    <Link to={`/user/${authUser.id}`}>
                        <div className='flex gap-3 justify-center items-center'>
                            <FontAwesomeIcon icon={faUser} />
                            {authUser.username}
                        </div>
                    </Link>
                    <div className='flex gap-3 justify-center items-center'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <button onClick={logout} className={`${!loginBoxOpen || 'hidden' && location.reload()}`}>
                            Logout</button>
                    </div>
                </>
                :
                <>
                    <div className='flex gap-3 justify-center items-center'>
                        <FontAwesomeIcon icon={faUser} />
                        <button onClick={(e) =>
                            setLoginBoxOpen(true)}>Login</button>
                    </div>

                    {loginBoxOpen && <LoginBox
                        className='cursor-pointer'
                        onClose={() => setLoginBoxOpen(false)} />
                    }


                    <div className='flex gap-3 justify-center items-center'>
                        <FontAwesomeIcon icon={faRegistered} />
                        <button onClick={hanldleClickToRegister}>Register</button>
                    </div>
                </>
            }

        </div>)
}