//multilevel inheritence

class Employee {
    ID : number;
    name : string;
    yearOfJoining : number;
    department : string;

    constructor(ID:number, name:string, yearOfJoining:number, department:string){
        this.ID = ID;
        this.name = name;
        this.yearOfJoining = yearOfJoining;
        this.department = department;
    }

    getDetails() : void{
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name , ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department);
    }
}

class Developer extends Employee {
    majorTechnology : string;
    experience : number;

    constructor(ID:number, name:string, yearOfJoining:number, department:string, majorTechnology:string, experience:number){
        super(ID, name, yearOfJoining, department);
        this.majorTechnology = majorTechnology;
        this.experience = experience;
    }

    getDetails(): void {
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name , ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department, ", Tech = " + this.majorTechnology, ", Experience = " + this.experience);
    }
}

class developerIntern extends Developer{
    trainingDuration : number;
    mentor : Developer;

    constructor(ID:number, name:string, yearOfJoining:number, department:string, majorTechnology:string, experience:number, trainingDuration:number, mentor: Developer){
        super(ID, name, yearOfJoining, department, majorTechnology, experience);
        this.trainingDuration = trainingDuration;
        this.mentor = mentor;
    }

    getDetails(): void {
        console.log("EmployeeID = " + this.ID, ", EmployeeName = " + this.name , ", JoiningYear = " + this.yearOfJoining, ", Department = " + this.department, ", Tech = " + this.majorTechnology, ", Experience = " + this.experience, ", TrainingDuration = " + this.trainingDuration, ", Mentor = " + this.mentor.ID + " , " + this.mentor.name);
    }
}

let emp1 = new Employee(34, "employee1", 2020, "HR");
let emp2 = new Developer(171, "employee2", 2021, "Frontend", "ReactJS", 2);
let int3 = new developerIntern(331, "employee3", 2023, "Frontend", "ReactJS", 0, 0.5, emp2);

emp1.getDetails();
emp2.getDetails();
int3.getDetails();

