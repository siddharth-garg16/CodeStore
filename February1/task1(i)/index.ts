//typescript only supports single and multilevel inheritance.

//single level inheritance

class Student {
    readonly dbID : Number;
    name : string;
    age : number;
    course : string;
    yearOfPassing : number;

    constructor(name:string, age:number, course:string, yearOfPassing:number){
        this.name = name;
        this.age = age;
        this.course = course;
        this.yearOfPassing = yearOfPassing;
    }

    getDetails() : void{
        console.log(this.name, this.age, this.course, this.yearOfPassing);
    }
}

class differentlyAbledStudent extends Student {
    specialClasses : boolean;

    constructor(name:string, age:number, course:string, yearOfPassing:number, specialClasses:boolean){
        super(name, age, course, yearOfPassing);
        this.specialClasses = specialClasses;
    }

    getDetails(): void {
        console.log(this.name, this.age, this.course, this.yearOfPassing, this.specialClasses);
    }

}

let specialStu:differentlyAbledStudent = new differentlyAbledStudent("abc", 25, "xyz", 2025, true);
specialStu.getDetails();

let avgStu:Student = new Student("random", 23, "cse", 2023);
avgStu.getDetails();