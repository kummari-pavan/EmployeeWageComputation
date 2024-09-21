console.log("Master Branch")
// UC 1: Check if Employee is Present or Absent
function checkEmployeeAttendance() {
    const IS_PRESENT = 1;
    let attendance = Math.floor(Math.random() * 2);
    if (attendance === IS_PRESENT) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}

// Call the function
checkEmployeeAttendance();

// UC 2: Calculate Daily Employee Wage
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;

function calculateDailyWage() {
    let dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Daily Employee Wage: " + dailyWage);
}

// Call the function
calculateDailyWage();
