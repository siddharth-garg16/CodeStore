//pattern two
/*
    1    
   123
  12345 
 1234567
123456789                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
*/

const getUserInput = () => {
    let userInput = parseInt(document.getElementById("number-input").value);
    if(userInput%2==0){
        alert("Please enter odd values only.")
        return
    }
    let res = [];
    for(let i=1; i<=userInput; i++){
        var ele = 1;
        var temp_str = "";
        for(let j=1; j<=(userInput*2)-1; j++){ 
            if(j>parseInt(userInput-i) && j<parseInt(userInput+i)){
                temp_str += ele;
                ele++;
            }else{
                temp_str += " ";
            }
        }
        res.push(temp_str);
    }
    document.getElementById("pattern").innerHTML = ``;

    for(str of res){
        document.getElementById("pattern").innerHTML += `<pre>${str}</pre>`;
    }
}