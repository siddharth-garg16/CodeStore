import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Header from "./components/Header"
import Paragraph from "./components/Paragraph"
import ResourceList from "./components/ResourceList"
import Logo from "./logo.svg"



ReactDOM.render(
    <div>
        <img src={Logo} alt="main-logo"/>
        <Header />
        <Paragraph />
        <ResourceList />
    </div>,
    document.getElementById("root")
)