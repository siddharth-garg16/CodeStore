var checkPrime = (num) => {
    let flag = true;
    if(num==2){
        return flag;
    }
    for(let i=2; i<=Math.ceil(Math.sqrt(num)); i++){
        if(num%i==0){
            flag = false;
            break;
        }
    }
    return flag
}

var showPrimes = (input, res) => {
    let i = 2;
    while(i<=input){
        if(checkPrime(i)){
            res.push(i);
        }
        i++;
    }
    return res;
}

function getNumber(){
    let userInput = document.getElementById("number-field").value;
    let result = showPrimes(userInput, []);

    for(value of result){
        document.getElementById("result-div").innerHTML += `<h1>${value}</h1>`;
    }
}




