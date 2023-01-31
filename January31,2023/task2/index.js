var Citizen = /** @class */ (function () {
    function Citizen(name, documents, securityPIN) {
        this.name = name;
        this.documents = documents;
        this.securityPIN = securityPIN;
    }
    Citizen.prototype.getName = function () {
        console.log(this.name);
    };
    Citizen.prototype.getDocuments = function () {
        console.log(this.documents);
    };
    Citizen.prototype.getSecurityPIN = function () {
        console.log(this.securityPIN);
    };
    return Citizen;
}());
var citizen1 = new Citizen("ABC", ["a123", "b123", "c123"], 1234);
var citizen2 = new Citizen("XYZ", ["x789", "y789", "z789"], 6789);
citizen1.getName();
citizen1.getDocuments();
citizen1.getSecurityPIN();
citizen2.getName();
citizen2.getDocuments();
citizen2.getSecurityPIN();
