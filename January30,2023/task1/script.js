
const validate = () => {

    let fullName = document.getElementById("fullName").value;
    let contact  = document.getElementById("contact").value;

    if(!validateName(fullName)){
        document.getElementById("fullname-warning").innerText = "(Name must not carry any digits or special characters.)";
        fullName.style.borderColor = "red";
        return false
    }
    if(!validateContact(contact)){
        document.getElementById("contact-warning").innerText = "(Contact number must be 10 digit long)";
        contact.style.borderColor = "red";
        return false
    }

    document.getElementById("message-display").innerHTML = `<h1>You have successfully registered yourself.</h1>`  
}

const validateName = (name) => {
    for(let i=0; i<name.length; i++){
        if(!isAlpha(name[i])){
            return false;
        }
    }
    return true;
}

const validateContact = (contact) => {
    if(contact.length!=10){
        return false;
    }
    return true;
}

const isAlpha = (ch) => {
    return ch.match(/[a-z]/i);
}

