//try, catch handles runtime errors---- not parse time errors
try{
    console.log("Start of try runs...");
    myVariable;
    console.log("End of try runs - never reached");
}catch(err){
    console.log("Error has occured:" + err.stack);
}finally{
    console.log("This finally code will always run");
}
console.log("and the execution continues");


let json = '{"age":30}';
try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name");
    }
    console.log(user.name);
}
catch(e){
    console.log("JSON Error:" + e.message);
}