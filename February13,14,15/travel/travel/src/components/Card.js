import React from "react"
import "./Card.css"
import Location from "../assets/location.png"

const Card = (props) => {
    return(
        <div className="card">

            <img className="card--image" src={props.img} alt="destination"/>

            <div className="card--content">
                <span> <img className="card--logo" src={Location} alt="location-icon"/> </span>
                <span className="card--country"> {props.country} </span>
                <span className="gray--small"> View on Google maps </span>
                <h1 className="card--destination"> {props.destination} </h1>
                <h3 className="card--date"> {props.date} </h3>
                <p> {props.information} </p>
            </div>

        </div>
    )
}

export default Card