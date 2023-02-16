import React from "react"
import MailIcon from "../images/mail.png"

const Body = () => {
    return(
        <div id="body-wrapper">
            <h1>Kakashi Hatake</h1>
            <h3>Copy Ninja</h3>
            <h4>kakashi.journal</h4>
            <button><img src={MailIcon} alt="mail-icon"/>Email</button>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt sit eaque ea sapiente, inventore dolore assumenda consectetur ducimus omnis tempore libero ex sed minus vitae delectus ipsa voluptatem, labore debitis aut perspiciatis molestias! Laborum sint aspernatur delectus explicabo! Aliquid tempore ex enim possimus, dignissimos dolorum minima exercitationem maxime ullam?</p>
        </div>
    )
}

export default Body