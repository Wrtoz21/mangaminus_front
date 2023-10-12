import { useState } from "react"
import { getUser } from "../hooks/get-user"
import { toast } from "react-toastify";

export default function LoginForm(){
    const [input,setInput] = useState({
        username:'',
        password:''
    })
    const {login} = getUser();

    const handleSubmitForm = e =>{console.log(e)
        e.preventDefault();
        login(input).catch(err => {
            toast.error(err.response.data.message)
        })
    }

    return(<>
    <form className="grid gap-3 border border-black"
    onSubmit={handleSubmitForm}>
        <div className="grid grid-cols p-2">Username
        <input
        placeholder = "username"
        className = " bg-gray-100 border border-black outline-none p-2"
        onChange={e => setInput ({...input,username:e.target.value})}
        />
        </div >
        <div className="grid grid-cols p-2">Password
        <input
        placeholder = "password"
        className = " bg-gray-100 border border-black outline-none p-2"
        onChange={e => setInput ({...input,password:e.target.value})}
        />
        </div>
        <div className="flex items-center justify-center p-2">
        <button className="bg-blue-600 text-2xl text-white rounded-md w-2/5 p-1" >Login</button>
        </div>
    </form>
    </>)

}