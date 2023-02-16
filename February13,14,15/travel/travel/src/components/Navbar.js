import React from "react"
import "./Navbar.css"
import Globe from "../assets/globe.png"

const Navbar = () => {
    return(
        <nav>
            <img src={Globe} alt="globe-icon" className="nav--icon"/>
            <h1 className="nav--text">&nbsp; my travel journal.</h1>
        </nav>
    )
}

export default Navbar