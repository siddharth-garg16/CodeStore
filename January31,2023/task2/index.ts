/*
Access Specifiers - 

Public - By default, members (properties and methods) of the TypeScript class are public - so you don’t need to prefix members with the public keyword. Public members are accessible everywhere without restrictions even from the multiple level sub-classes without any compile errors.

Private - A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class and even their sub-classes won't be allowed to use their private properties and attributes.

Protected - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class.
*/


class Citizen {
    public name:string;
    protected documents:string[];
    private securityPIN:number;

    constructor(name:string, documents:string[], securityPIN:number){
        this.name = name;
        this.documents = documents;
        this.securityPIN = securityPIN;
    }

    getName() : void{
        console.log(this.name);
    }

    getDocuments() : void{
        console.log(this.documents);
    }
    getSecurityPIN() : void{
        console.log(this.securityPIN);
    }
}

let citizen1 = new Citizen("ABC", ["a123", "b123", "c123"], 1234);
let citizen2 = new Citizen("XYZ", ["x789", "y789", "z789"], 6789);

citizen1.getName();
citizen1.getDocuments();
citizen1.getSecurityPIN();

citizen2.getName();
citizen2.getDocuments();
citizen2.getSecurityPIN();
