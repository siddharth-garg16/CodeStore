import React from "react"
import Facebook from "../images/facebook.png"
import LinkedIn from "../images/linkedin.png"
import Twitter from "../images/twitter.png"
import Github from "../images/github.png"
import Reddit from "../images/reddit.png"


const Footer = () => {
    return(
        <footer>
            <img src={LinkedIn} alt="linkedin"/>
            <img src={Facebook} alt="facebook"/>
            <img src={Github} alt="github"/>
            <img src={Reddit} alt="reddit"/>
            <img src={Twitter} alt="twitter"/>
        </footer>
    )
}

export default Footer