console.log("Master Branch")

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const WORKING_DAYS_IN_MONTH = 20;

// Use Case 1:- Check if Employee is Present or Absent 
function checkEmployeeAttendance() {
    const IS_PRESENT = 1;
    let attendance = Math.floor(Math.random() * 2);
    if (attendance === IS_PRESENT) {
        console.log("Employee is Present");
    } 
    else {
        console.log("Employee is Absent");
    }
    return attendance;
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

// Use Case-4 Solving Using Switch Case
function getWorkingHours(empCheck) {
    switch(empCheck) {
        case 1:
            return FULL_TIME_HOUR;
        case 2:
            return PART_TIME_HOUR_UC4;
        default:
            return 0;
    }
}
function calculateWageUsingSwitch() {
    let empCheck = Math.floor(Math.random() * 3); // i'm defining the Random value between 0, 1, 2
    let hoursWorked = getWorkingHours(empCheck);
    let empWage = hoursWorked * WAGE_PER_HOUR_UC4;
    console.log("Employee Wage using Switch Case: " + empWage);
}
calculateWageUsingSwitch();


// UC 5: Calculate Wages for a Month
function calculateMonthlyWage(callback) {
    let attendance = callback();
    if(attendance===1){
        let totalWage = WAGE_PER_HOUR * FULL_DAY_HOUR * WORKING_DAYS_IN_MONTH;
        console.log("Monthly Employee Wage: " + totalWage);
    }

}
calculateMonthlyWage(checkEmployeeAttendance);


//UC 6: Calculate Wages Till Condition Reached
function computeEmployeeWage() {
    const PART_TIME = 1;
    const FULL_TIME = 2;
    const WAGE_PER_HR = 20;
    const MAX_WORKING_DAYS = 20;
    const MAX_WORKING_HRS = 100;

    let totalWage = 0;
    let totalWorkingHrs = 0;
    let totalWorkingDays = 0;

    console.log("Day |  Workinghrs |  Wage |  Total working hrs");
    console.log("____   __________   ______   _________________");


    while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHrs < MAX_WORKING_HRS) {
        totalWorkingDays++;

        let empType = Math.floor(Math.random() * 3);
        let workingHrs = 0;

        switch (empType) {
            case FULL_TIME:
                workingHrs = 8;
                break;
            case PART_TIME:
                workingHrs = 4;
                break;
            default:
                workingHrs = 0;
                break;
        }

        if (totalWorkingHrs + workingHrs > MAX_WORKING_HRS) {
            workingHrs = MAX_WORKING_HRS - totalWorkingHrs;
        } // ensure that the total working hours do not exceed the maximum allowed working hours (which is MAX_WORKING_HRS = 100).

        totalWorkingHrs += workingHrs;
        let wage = workingHrs * WAGE_PER_HR;
        totalWage += wage;

        console.log(`${totalWorkingDays}    |   ${workingHrs}    |   ${wage}    |   ${totalWorkingHrs}`);
    }

    console.log("Total wage for a month is " + totalWage);
    console.log("Total working days: " + totalWorkingDays);
    console.log("Total working hours: " + totalWorkingHrs)
}

computeEmployeeWage();

// ${totalWorkingDays}: This displays the current day in the wage calculation loop. It tells you on which day the work is being computed.

// ${workingHrs}: This shows the number of hours worked on that particular day (either 0, 4, or 8 based on the employee type: full-time, part-time, or absent).

// ${wage}: This gives the wage for that day, which is calculated by multiplying the number of working hours by the wage per hour (WAGE_PER_HR).

// ${totalWorkingHrs}: This shows the cumulative total hours worked so far, after adding the working hours for the current day.

//Output=>

// Day  | Workinghrs |  Wage  |  Total working hrs
// ____   __________   ______   _________________
// 1    |   8        |  160   |     8
// 2    |   4        |  80    |    12
// 3    |   0        |   0    |    12
// 4    |   8        |  160   |    20
// 5    |   4        |  80    |    24


// Total wage for a month is 480
// Total working days: 5
// Total working hours: 24
