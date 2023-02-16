import React from "react"
import "./Joke.css"

const Joke = (props) => {
    console.log(props)
    return(
        <div className="joke--wrapper">
            {props.setup && <h1 className="set--up">{props.setup}</h1>}
            <h3 className="punch--line">{props.punchline}</h3>
        </div>
    )
}

export default Joke