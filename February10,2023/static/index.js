const form = document.getElementById("signup-form");

form.addEventListener("submit", registerUser);

async function registerUser(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await fetch('http://127.0.0.1:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    }).then((res)=>res.json())

    if(result.status === 'ok'){
        alert("Successfully registered")
    }else{
        alert(result.error);
    }
}