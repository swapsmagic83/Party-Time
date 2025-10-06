import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar} from "reactstrap";
import Home from "./Home";
const NavBar = () =>{
    const location = useLocation()
    return (
        
        <>
        {location.pathname !=="/view"&&
        <Navbar className="Navbar-container">
                    <NavLink className="NavBar-NavLink" to='/'>Home</NavLink>
                    <NavLink className="NavBar-NavLink" to='/birthday'> Birthday</NavLink>
                    <NavLink className="NavBar-NavLink" to='/graduation'>Graduation</NavLink>
                    <NavLink className="NavBar-NavLink" to='/halloween'>Halloween</NavLink>

                </Navbar>}
                <Home />
        </>
    )
}
export default NavBar;