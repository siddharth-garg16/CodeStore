const getAndShowData = () => {
    let name = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementsByName("gender");
    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;
    let sub = document.getElementById("subject");
    let subjects = [...sub.selectedOptions].map(option=>option.value);

    let selectedGender;
    for(let i=0; i<gender; i++){
        if(gender[i].checked){
            selectedGender = gender[i].value;
        }
    }

    document.getElementById("submitted-data-display").innerHTML = `<h3>Submitted Data:</h3><table><tr><th>Full Name</th><td>${name}</td</tr><tr><th>Age</th><td>${age}</td></tr><tr><th>Gender</th><td>${selectedGender}</td></tr><tr><th>Address</th><td><address>${address}</address></td></tr><tr><th>Contact No.</th><td>${contact}</td></tr><tr><th>Enrolled Subjects</th><td>${subjects}</td></table>`
}
