import {Outlet} from "react-router-dom"
import Header from "./Header";
import NavBar from "./NavBar";
import NavBar_top_anime from "./NavBar_top_anime";

export default function Layout(){
  
    return (
        <>
        <Header/>
        <NavBar/>
        <NavBar_top_anime/>
        
        <Outlet/>
        </>
    )
}