import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Card1 from "./images/card1.jpeg"

const App = () => {
    return(
        <div>
            <Navbar />
            <Hero />
            <Card
                imgPath = {Card1}
                starRating = "5.0"
                infoText = "Life lessons with Katie Zaferes"
                price = "$136"
            />
        </div>
    )
}

export default App