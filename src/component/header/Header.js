import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

function Header(){
    return <><div >
        <div><Navbar/></div>
        <div>
        <Outlet/>
        </div>
        
        
        </div></>
}
export default Header;