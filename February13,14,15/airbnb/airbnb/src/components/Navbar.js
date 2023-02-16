import React from "react"
import Airbnb from "../images/airbnb.png"
import "./Navbar.css"

const Navbar = () => {
    return(
        <nav><img className="main-logo" src={Airbnb} alt="airbnb-logo"/></nav>
    )
}

export default Navbar