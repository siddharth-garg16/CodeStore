AVAILABLE_SNEAKERS = [
    {
        name : "AJ1",
        price : 9999
    },
    {
        name : "AJ3",
        price : 13999
    },
    {
        name : "AJ4",
        price : 17999
    },
    {
        name : "AJ6",
        price : 15999
    },
    {
        name : "AJ11",
        price : 23999
    },
    {
        name : "PAGASYS",
        price : 9999
    },
    {
        name : "RSX",
        price : 6999
    },
    {
        name : "VANS",
        price : 4999
    },
    {
        name : "FLEX",
        price : 2199
    },
    {
        name : "SUPERSTARS",
        price : 7999
    },
    {
        name : "SAMBAS",
        price : 5999
    },
    {
        name : "CURRY10",
        price : 29999
    }
]

const filterItems = () => {
    let minPrice = document.getElementById("fromPrice").value;
    let maxPrice = document.getElementById("toPrice").value;
    let filtered_sneakers = [];

    for(let sneaker of AVAILABLE_SNEAKERS){
        if(sneaker.price>=minPrice && sneaker.price<=maxPrice){
            filtered_sneakers.push(sneaker.name + " - " + sneaker.price);
        }
    }

    let display_box = document.getElementById("filtered-products-display");

    display_box.innerHTML = `<h2>Available sneakers in the specified price range:</h2>`

    for(let sneaker of filtered_sneakers){
        display_box.innerHTML += `<h3>${sneaker}</h3>`;
    }
}