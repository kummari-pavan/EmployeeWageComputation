console.log("Master Branch")

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;

// Use Case 1:- Check if Employee is Present or Absent 
function checkEmployeeAttendance() {
    const IS_PRESENT = 1;
    let attendance = Math.floor(Math.random() * 2);
    if (attendance === IS_PRESENT) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}
checkEmployeeAttendance();


// UC 2: Calculate Daily Employee Wage
function calculateDailyWage() {
    let dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Daily Employee Wage: " + dailyWage);
}
calculateDailyWage();


// Use Case-3  Add Part-Time Employee & Wage Calculation
function calculatePartTimeWage() {
    let partTimeWage = WAGE_PER_HOUR * PART_TIME_HOUR;
    console.log("Part-Time Employee Wage: " + partTimeWage);
}
calculatePartTimeWage();

