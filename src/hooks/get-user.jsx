import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function getUser(){
    return useContext(AuthContext)
}