//pattern one
/* 
*****
*   *
*   *
*   *
*****
*/

const getUserInput = () => {
    let userInput = parseInt(document.getElementById("number-input").value);
    console.log(typeof userInput);
    let res = [];
    for(let i=1; i<=userInput; i++){
        var temp_str = "";
        for(let j=1; j<=userInput; j++){
            if(i==1 || i==userInput){
                temp_str += "* ";
            }else{
                if(j==1 || j==userInput){
                    temp_str += "* ";
                }else{
                    temp_str += "  ";
                }
            }
        }
        res.push(temp_str);
    }
    document.getElementById("pattern").innerHTML = ``;

    for(str of res){
        document.getElementById("pattern").innerHTML += `<pre>${str}</pre>`;
    }
}