const getAndShowValue = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let ele = document.getElementsByName("gender");
    let gender;
    for(let i=0; i<ele.length; i++){
        if(ele[i].checked){
            gender = ele[i].value;
        }
    }

    document.getElementById("submitted-data-display").innerHTML = `<h3><u>Submitted Data:</u></h3><table><tr><th>First Name</th><td>${fname}</td></tr><tr><th>Last Name</th><td>${lname}</td></tr><tr><th>Age</th><td>${age}</td></tr><tr><th>Gender</th><td>${gender}</td></tr></table>`
}