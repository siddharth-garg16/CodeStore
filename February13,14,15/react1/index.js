function MyList() {
    return(
        <ul className="nav-items">
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
        </ul>
    )
}
function MyParagraph() {
    return(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis, dicta excepturi iusto minus vitae? Odio earum sapiente illo accusamus at sint fugit aspernatur porro incidunt repudiandae voluptatem, distinctio iusto. Nostrum natus voluptatum laudantium consectetur reprehenderit, numquam dolor eum consequatur deserunt a dolorem aperiam nesciunt tempore autem odit. Nihil repellendus quas accusantium accusamus ipsa voluptatum eos corporis praesentium odit, amet harum eum voluptas eligendi rerum itaque reiciendis deleniti aspernatur impedit expedita at, magni velit. Deserunt sit cum non laboriosam asperiores. Totam at amet illo dolor, atque corporis quia? Neque esse corporis impedit iste! Deserunt nostrum possimus voluptate eligendi illo facilis?</p>
    )
}
function MyHeading() {
    return(
        <h1>This is a heading for the paragraph.</h1>
    )
}
function MyPage() {
    return(
        <div>
            <MyHeading />
            <MyParagraph />
            <MyList />
        </div>
    )
}

ReactDOM.render(<MyPage />, document.getElementById("root"));
