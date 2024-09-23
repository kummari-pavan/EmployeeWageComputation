class EmployeeWageComputation {
    constructor() {
        this.PART_TIME = 1;
        this.FULL_TIME = 2;
        this.WAGE_PER_HR = 20;
        this.MAX_WORKING_DAYS = 20;
        this.MAX_WORKING_HRS = 100;

        this.totalWage = 0;
        this.totalWorkingDays = 0;
        this.totalWorkingHrs = 0;
    }

    // Method to compute Employee Wage
    computeEmployeeWage() {
        console.log("Day |  Workinghrs |  Wage |  Total working hrs");
        console.log("____   __________   ______   _________________");

    
        while (this.totalWorkingDays < this.MAX_WORKING_DAYS && this.totalWorkingHrs < this.MAX_WORKING_HRS) {
            this.totalWorkingDays++;

            let empType = Math.floor(Math.random() * 3);
            let workingHrs = this.getWorkingHours(empType);

            // Make sure total hours do not exceed the limit
            if (this.totalWorkingHrs + workingHrs > this.MAX_WORKING_HRS) {
                workingHrs = this.MAX_WORKING_HRS - this.totalWorkingHrs;
            }// ensure that the total working hours do not exceed the maximum allowed working hours (which is MAX_WORKING_HRS = 100).

            this.totalWorkingHrs += workingHrs;
            let wage = workingHrs * this.WAGE_PER_HR;
            this.totalWage += wage;

            console.log(`${totalWorkingDays}    |   ${workingHrs}    |   ${wage}    |   ${totalWorkingHrs}`);
        }

        this.printSummary();
    }

    // Helper Method to get Working Hours based on Employee Type
    getWorkingHours(empType) {
        switch (empType) {
            case this.FULL_TIME:
                return 8;
            case this.PART_TIME:
                return 4;
            default:
                return 0;
        }
    }

    // Method to print the summary of wage computation
    printSummary() {
        console.log("Total wage for a month is " + this.totalWage);
        console.log("Total working days: " + this.totalWorkingDays);
        console.log("Total working hours: " + this.totalWorkingHrs);
    }
}

// Instantiate the class and compute the wage
const employeeWage = new EmployeeWageComputation();
employeeWage.computeEmployeeWage();