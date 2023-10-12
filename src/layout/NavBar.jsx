import { useState } from "react";
import LoginBox from "../authen/LoginBox";
import { IconSearch } from "../icons";
import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

export default function NavBar() {
    const Navigate = useNavigate();
    const hanldleClickToRegister = () => { return Navigate("/register") }
    const hanldleClickToHome = () => { return Navigate("/") }
    const [loginBoxOpen, setLoginBoxOpe] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    // const handleClickToLogin = () =>{}

    return (
        <div className="bg-[#C93800] grid grid-cols-5 justify-items-center text-2xl py-2"  >
            <button onClick ={hanldleClickToHome} className="items-center">Home</button>
            <div >New Manga</div>
            <div>Hot Manga</div>
            <div>New Manga</div>
            <div 
            className="flex flex-row justify-end gap-4"
            onClick={() => setOpenSearch(!openSearch)}>
                
                <div className="grid grid-cols-2 text-2xl justify-items-center">
                    <div className="flex gap-2 text-2xl ">
                        <button onClick={() => setLoginBoxOpe(!loginBoxOpen)}>Login</button>
                        {loginBoxOpen && <LoginBox className='cursor-pointer' />}

                    </div>
                </div>
                <button onClick={hanldleClickToRegister}>Register</button>
            </div>
            {/* <div className="flex justify-end">
                <SearchBox />
            </div> */}
            {/* <Search/> */}
        </div>)
}