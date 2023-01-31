const cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Chandigarh"];

let choices = [];

let selector = document.getElementById("preference-selector");
let deletor = document.getElementById("preference-deletor");

let fromLocation = document.getElementById("from");
let toLocation = document.getElementById("to");

for(city of cities){
    fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
}

const addSelections = () => {
    let from = fromLocation.value;
    let to = toLocation.value;

    if(from==="none" || to==="none"){
        alert("Please select both destinations.");
        return
    }

    choices.push({
        from: from,
        to: to
    });

    // console.log(choices);

    fromLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    toLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    
    for(city of cities){
        fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
        toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    }

    document.getElementById("display-choices").innerHTML = ``;
    for(let obj of choices){
        document.getElementById("display-choices").innerHTML += `<h1>${obj['from']} to ${obj['to']}</h1>`;
    }
}

const clearSelections = () => {
    choices.length = 0;
    document.getElementById("display-choices").innerHTML = ``;
    // console.log(choices);

    fromLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;
    toLocation.innerHTML = `<option value="none" selected disabled hidden>Select a city</option>`;

    for(city of cities){
        fromLocation.innerHTML += `<option value=${city}> ${city} </option>`;
        toLocation.innerHTML += `<option value=${city}> ${city} </option>`;
    }
}

fromLocation.addEventListener("change", () => {
    let val = fromLocation.value;
    
    let to_options = toLocation.options;
    // console.log(to_options);

    for(let i=1; i<to_options.length;i++){
        for(obj of choices){
            if(obj["from"]===val && to_options[i].value === obj["to"]){
                console.log(obj["from"], val, choices)
                to_options[i].disabled = true;//code
            }
        }

        if(val === to_options[i].value){
            to_options[i].disabled = true;
        }
    }
})

toLocation.addEventListener("change", () => {
    let val = toLocation.value;
    
    let from_options = fromLocation.options;
    // console.log(to_options);

    for(let i=1; i<from_options.length;i++){
        for(let obj of choices){
            if(obj["to"]===val && from_options[i].value === obj["from"]){
                from_options[i].disabled = true;//code
            }
        }

        if(val === from_options[i].value){
            from_options[i].disabled = true;
        }
    }
})





