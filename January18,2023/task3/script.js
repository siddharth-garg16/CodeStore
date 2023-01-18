const loadHome = () => {
    let homeBtn = document.getElementById("home-btn");
    let aboutBtn = document.getElementById("about-btn");
    let contactBtn = document.getElementById("contact-btn");

    homeBtn.style.fontSize = "300%";
    homeBtn.style.fontWeight = "700";

    aboutBtn.style.fontSize = "150%";
    aboutBtn.style.fontWeight = "400";

    contactBtn.style.fontSize = "150%";
    contactBtn.style.fontWeight = "400";

    document.getElementById("page-body").innerHTML = `<p>No products are available for online shipment yet.</p>`;
}

const loadAbout = () => {
    let homeBtn = document.getElementById("home-btn");
    let aboutBtn = document.getElementById("about-btn");
    let contactBtn = document.getElementById("contact-btn");

    aboutBtn.style.fontSize = "300%";
    aboutBtn.style.fontWeight = "700";

    homeBtn.style.fontSize = "150%";
    homeBtn.style.fontWeight = "400";

    contactBtn.style.fontSize = "150%";
    contactBtn.style.fontWeight = "400";
 
    document.getElementById("page-body").innerHTML = `<p>MuscleTank® was founded with the idea of providing India with sports nutrition supplements that are specifically focused on Indian customer needs and listens to their sentiments day in day out. MuscleTank® has quickly risen as consumer’s favorite brand with industry-first concept introductions like authenticity, protein test certificates, scoop on top, clinically researched products, etc.</p>`;
}

const loadContact = () => {
    let homeBtn = document.getElementById("home-btn");
    let aboutBtn = document.getElementById("about-btn");
    let contactBtn = document.getElementById("contact-btn");

    contactBtn.style.fontSize = "300%";
    contactBtn.style.fontWeight = "700";

    homeBtn.style.fontSize = "150%";
    homeBtn.style.fontWeight = "400";

    aboutBtn.style.fontSize = "150%";
    aboutBtn.style.fontWeight = "400";

    document.getElementById("page-body").innerHTML = `<p><u>Write us at</u>: contact@muscletank.com</p>`;
}