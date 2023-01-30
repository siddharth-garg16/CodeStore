let promise = fetch("https://official-joke-api.appspot.com/random_ten")

promise.then(response => {
    return response.json();
}).then(data => {
    for(joke of data){
        document.getElementById("wrapper").innerHTML += `<div><h2>${joke["setup"]}</h2><br><h3>${joke["punchline"]}</h3></div>`
    }
}).catch(error => {
    console.log("error");
})
//setup punchline
