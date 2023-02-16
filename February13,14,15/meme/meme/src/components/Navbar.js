import React from "react"
import TrollFace from "../images/trollface.png"
import "./Navbar.css"

const Navbar = () => {
    return(
        <nav>
            <img className="nav--icon" src={TrollFace} alt="main-icon"/>
            <h1 className="nav--text">Meme Generator</h1>
        </nav>
    )
}

export default Navbar

