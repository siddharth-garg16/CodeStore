import React from "react"
import "./Meme.css"
import memesData from "../data/memesData"

const Meme = () => {
    return(
        <main>
            <div className="meme--form">
                <input className="meme--input" type="text" placeholder="Top text"/>
                <input className="meme--input" type="text" placeholder="Bottom text"/>
                <br />
                <button className="meme--button">Get a new meme image</button>
            </div>
        </main>
    )
}

export default Meme