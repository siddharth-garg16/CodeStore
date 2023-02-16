import React from "react"
import Logo from "../images/logo.svg"

const Navbar = () => {
    return(
        <nav>
            <img src={Logo} alt="main-logo" />
            <h3>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar