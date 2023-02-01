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
//typescript only supports single and multilevel inheritance.
var Student = /** @class */ (function () {
    function Student(name, age, course, yearOfPassing) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.yearOfPassing = yearOfPassing;
    }
    Student.prototype.getDetails = function () {
        console.log(this.name, this.age, this.course, this.yearOfPassing);
    };
    return Student;
}());
var differentlyAbledStudent = /** @class */ (function (_super) {
    __extends(differentlyAbledStudent, _super);
    function differentlyAbledStudent(name, age, course, yearOfPassing, specialClasses) {
        var _this = _super.call(this, name, age, course, yearOfPassing) || this;
        _this.specialClasses = specialClasses;
        return _this;
    }
    differentlyAbledStudent.prototype.getDetails = function () {
        console.log(this.name, this.age, this.course, this.yearOfPassing, this.specialClasses);
    };
    return differentlyAbledStudent;
}(Student));
var specialStu = new differentlyAbledStudent("abc", 25, "xyz", 2025, true);
specialStu.getDetails();
var avgStu = new Student("random", 23, "cse", 2023);
avgStu.getDetails();
