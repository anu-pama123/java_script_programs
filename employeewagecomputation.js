//uc1

const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("uc1 - Employee is absent");
    return;
} else {
    console.log("uc1 - Employee is present");
}

//uc2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME: 
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;    
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("uc2 - Employee Wage: " + empWage);

//uc3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case  IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("uc3 - Employee wage: " + empWage);


//uc4
let NUM_OF_WORKING_DAYS = 20;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("uc4 - Total hours: " + empHrs + " , Employee wage: " + empWage);

//uc5
let MAX_HRS_IN_MONTH = 100;
NUM_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("uc5 - Total Days:" + totalWorkingDays + " ,Total Hrs: " + totalEmpHrs + " ,Emp Wage" + empWage);

//uc6
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

MAX_HRS_IN_MONTH = 160;
NUM_OF_WORKING_DAYS = 20;
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log("uc6 - Total Days: " + totalWorkingDays + " ,Total Hrs: " + totalEmpHrs + " ,Emp wage: " + empWage);

//uc9
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(calcDailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("uc9 - Emp wage with Arrow.:" + " ,Total hours: " + totalHours + "Total wage: " + totalSalary);
let nonWorkingDays = new Array();
let partWorkingdays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach( (value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value ==4) partWorkingdays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working days:" + fullWorkingDays);
console.log("Part working days: " + partWorkingdays);
console.log("Non working days: " + nonWorkingDays);