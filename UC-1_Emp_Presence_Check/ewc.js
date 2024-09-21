// UC 1: Check if Employee is Present or Absent
function checkEmployeeAttendance() {
    const Is_Present = 1;
    let attendance = Math.floor(Math.random() * 2);
    if (attendance === Is_Present) {
        console.log("Employee is Present");
    } else {
        console.log("Employee is Absent");
    }
}

// Call the function
checkEmployeeAttendance();