document.getElementById("change-btn").addEventListener("click", () => {
    document.getElementById("main-heading").style.cssText = "background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44); -webkit-text-fill-color: transparent; -webkit-background-clip: text;"

    let content = document.getElementsByTagName("p");
    for(con of content){
        con.style.cssText = "color: rgb(150, 150, 150); font-family: 'Baumans', cursive;";
    }

    document.getElementById("main-image").src = "./media/after.jpg"

    document.getElementsByTagName("footer")[0].remove();
})