let lightSwitch = document.getElementById("switch");
let bulb = document.getElementById("bulb");
bulb.style.filter = "grayscale(1)";
lightSwitch.textContent = "Turn on the light bulb";
var turned_on = false;

lightSwitch.addEventListener("click", () => {
    if(turned_on){
        bulb.style.filter = "grayscale(1)";
        turned_on = false;
        lightSwitch.textContent = "Turn on the light bulb";
    }else{
        bulb.style.filter = "grayscale(0)";
        turned_on = true;
        lightSwitch.textContent = "Turn off the light bulb";
    }
})