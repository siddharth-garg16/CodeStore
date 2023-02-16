import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import destinationData from "./data/destinationData"

const App = () => {
    const cardElements = destinationData.map((val)=>{
        return <Card
                img={val.img}
                country={val.country}
                destination={val.destination}
                date={val.date}
                information={val.information}
                />
    })

    return(
        <div>
            <Navbar />
            {cardElements}
        </div>
    )
}

export default App