import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div className="nav-bar">
        <li>
        <Link className ="nav-bar-link" to="/rent">Rent
        </Link>
        </li>
        <li>
        <Link className ="nav-bar-link" to="/favourite">Favourite
        </Link>
        </li>

    </div>
  )
}

export default NavBar