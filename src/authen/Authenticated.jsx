import { Navigate } from "react-router-dom"
import { getUser } from "../hooks/get-user"

export default function Authenticated({children})
{
    const {authUser} = getUser()

    // if(!authUser){
    //     return <Navigate to ="/"/>
    // }
    return children
}