import React from "react"
import "./Card.css"
import Star from "../images/star.png"

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.imgPath} alt="card-pic" className="card--image"/>
            <div className="card--info">
                <img src={Star} alt="star-icon" className="card--star"/>
                <span>{props.starRating} &ensp;</span>
                <span className="gray">(6)</span>
                <span className="gray">&#8226;USA</span>
            </div>
            <p>{props.infoText}</p>
            <p><b>From {props.price}/</b>person</p>
        </div>
    )
}

export default Card