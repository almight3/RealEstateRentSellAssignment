import React from 'react'
import "./NavBar.css"
import {NavLink} from "react-router-dom"
import Logo from "../../Assets/logo.png"
function NavBar() {
  return (
    <div className="nav-bar">
        <li>
        <NavLink className ="nav-bar-link" to="/rent">Rent
        </NavLink>
        </li>
        <li>
        <NavLink className ="nav-bar-link" to="/favourite">Favourite
        </NavLink>
        </li>

    </div>
  )
}

export default NavBar