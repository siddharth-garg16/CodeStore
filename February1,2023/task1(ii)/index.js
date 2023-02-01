//multilevel inheritence
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(ID, name, yearOfJoining, department) {
        this.ID = ID;
        this.name = name;
        this.yearOfJoining = yearOfJoining;
        this.department = department;
    }
    Employee.prototype.getDetails = function () {
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name, ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(ID, name, yearOfJoining, department, majorTechnology, experience) {
        var _this = _super.call(this, ID, name, yearOfJoining, department) || this;
        _this.majorTechnology = majorTechnology;
        _this.experience = experience;
        return _this;
    }
    Developer.prototype.getDetails = function () {
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name, ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department, ", Tech = " + this.majorTechnology, ", Experience = " + this.experience);
    };
    return Developer;
}(Employee));
var developerIntern = /** @class */ (function (_super) {
    __extends(developerIntern, _super);
    function developerIntern(ID, name, yearOfJoining, department, majorTechnology, experience, trainingDuration, mentor) {
        var _this = _super.call(this, ID, name, yearOfJoining, department, majorTechnology, experience) || this;
        _this.trainingDuration = trainingDuration;
        _this.mentor = mentor;
        return _this;
    }
    developerIntern.prototype.getDetails = function () {
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name, ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department, ", Tech = " + this.majorTechnology, ", Experience = " + this.experience, ", TrainingDuration = " + this.trainingDuration, ", Mentor = " + this.mentor.ID + " , " + this.mentor.name);
    };
    return developerIntern;
}(Developer));
var emp1 = new Employee(34, "employee1", 2020, "HR");
var emp2 = new Developer(171, "employee2", 2021, "Frontend", "ReactJS", 2);
var int3 = new developerIntern(331, "employee3", 2023, "Frontend", "ReactJS", 0, 0.5, emp2);
emp1.getDetails();
emp2.getDetails();
int3.getDetails();
