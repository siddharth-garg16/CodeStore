const onClick = () => {
    alert("You interacted with the element that triggered onclick event.")
}

document.getElementById("on-context-menu").addEventListener("contextmenu", (e) => {e.preventDefault()});

const onDoubleClick = () => {
    document.getElementById("on-double-click").innerHTML += `<h3>You double clicked on this element.</h3>`
}

const onMouseDown = () => {
    document.getElementById("on-mouse-down").style.color = "white";
}

const onMouseEnter = () => {
    document.getElementById("on-mouse-enter").style.border = "10px solid black";
}

const onMouseLeave = () => {
    document.getElementById("on-mouse-leave").style.backgroundColor = "rgb(173, 216, 230)";
}

const onMouseUp = () => {
    alert("You released your mouse in that element.");
}

const onMouseOver = () => {
    document.getElementById("on-mouse-over").innerHTML += `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis suscipit autem, necessitatibus voluptatem pariatur modi, fugit atque maxime vel cupiditate impedit. Voluptatibus nostrum commodi dolore, eius sint tempore fuga, aliquam sapiente ea dicta, atque blanditiis. Voluptates illum aliquid doloribus quasi suscipit pariatur, ducimus iusto similique sapiente molestiae quis ullam. Modi!</p>`;
}