const form = document.getElementById("login-form");

form.addEventListener("submit", loginUser);

async function loginUser(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = await fetch('http://127.0.0.1:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((res)=>res.json())

    if(result.status === 'ok'){
        console.log("got the token", result.data)
    }else{
        alert(result.error);
    }
}