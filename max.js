// Find Out the Max Number !
var teachers_salary = 20000;
var pilot_salary = 30000;
var doctor_salary = 50000;

// Solution - 1

if(teachers_salary > pilot_salary) {
    if(teachers_salary > doctor_salary) {
        console.log("Teacher is richest man!");
    }
}
else {
    if(pilot_salary > doctor_salary){
        console.log("Pilot is richest man!");
    }
    else {
        if(doctor_salary > teachers_salary){
            console.log("Doctor is richest man!");
        }
    }
}

// Solution - 2

var result = Math.max(teachers_salary, pilot_salary, doctor_salary);

console.log(result);