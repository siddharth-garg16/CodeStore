document.getElementsByTagName("section")[0].style.cssText = "padding: 3em; text-align: center";

let cards = document.getElementsByClassName("content-wrapper");

for(let card of cards){
    card.style.cssText = "background-color: rgba(250, 200, 152, 0.75); padding: 2em; margin: 2em";
}

let btn = document.getElementById("show-details-btn");
btn.addEventListener("click", () => {
    let tuatara = document.getElementById("tuatara");
    let agera = document.getElementById("agera");
    let venom = document.getElementById("venom");

    tuatara.innerHTML += `<p>Created by American supercar maker SSC (formerly Shelby SuperCars, no relation to Caroll Shelby), the Tuatara not only beat the next fastest supercar on the list but blew it out of the water (or salt flats, as it were.)
    On October 10th, 2020, the SSC Tuatara managed to claim the title of the world’s fastest production vehicle by clocking an average run of 316.11 mph (508.73 kph), also claiming the title for the first production car to break the 500 kph barrier. But that record wasn’t official, apparently, so they went back and did another run in January 2021, this time officially grabbing the record at 282.9 mph.</p>`;

    agera.innerHTML += `<p>The Koenigsegg Agera RS is a hybrid of sorts (no, not that kind of hybrid). It’s an Agera R at heart, with some of the advanced tech of the One:1 and some of the Agera S sprinkled in for good measure. There were only 25 examples of the Agera RS produced. Powered by a 5.0-liter twin-turbo V8, the “normal” Agera RS produces 1,160 horsepower (on regular pump gasoline, mind you). However, 11 lucky owners were able to (theoretically) hit the top speed of 277 due to checking the “1MW” special package when ordering theirs, which increases the ponies to 1,341.</p>`;

    venom.innerHTML += `<p>This hypercar from Texas-based Hennessey is an impressive machine, to say the least. Sporting a twin-turbo 7.0-liter V8 producing a massive 1,244 horsepower, the Venom GT beat a world record set by the Koenigsegg Agera R as the fastest accelerating production car in the world when it did a run from zero to 186 mph in 13.63 seconds. This beast can go from zero to 100 mph in 5.6 seconds (a world record) and hit 200 mph from a stop in only 14.51 seconds (also a world record). Hennessey claims the Venom GT can reach a top speed of 278 mph if given a bit more room to do it.</p>`;

    btn.style.display = "none";
})