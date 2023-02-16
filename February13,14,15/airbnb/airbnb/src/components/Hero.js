import React from "react"
import "./Hero.css"
import DisplayPhoto from "../images/hero-image.PNG"

const Hero = () => {
    return(
        <section className="hero-wrapper">
            <img className="display-image" src={DisplayPhoto} alt="grid-collage"/>
            <div className="info-wrapper">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero