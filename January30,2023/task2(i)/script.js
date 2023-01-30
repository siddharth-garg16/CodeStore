//preventDefault() - This method prevents the browser from executing the default behavior of the selected element.
//in given case, clicking on the anchor tag element won't open the google in new tab. instead it will console "link clicked" on every click

let anchor = document.getElementById("google");
anchor.addEventListener("click", function(e){
    console.log("Link clicked");
    e.preventDefault();
})
