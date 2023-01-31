//enum in typescript

enum weekdays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(weekdays);
console.log(weekdays[2]);
console.log(weekdays.Tuesday);

interface Employee {
    name : string,
    employeeID : number,
    weekAttendance : boolean[],
    weeklyLeaveStatus() : string;
}

let emp1 = {
    name : "random",
    employeeID : 25678,
    weekAttendance : [true, true, false, true, true],
    weeklyLeaveStatus(){
        for(let i=0; i<5; i++){
            if(!this.weekAttendance[i]){
                return weekdays[i];
            }
        }
    }
}
console.log(emp1);
console.log(emp1.weeklyLeaveStatus());

