//UC7:-- Use the Daily Wage Array perform following operations using Array Helper Functions

console.log("Welcome to Employee wage program.");

const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_ABSENT:
            return 0;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    }
}
let empHours = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))  //Storing daily wage in array.
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

//UC 7A-alc total wage using array foreach traversal or reduce method

let totalEmpHrs=0;
let empDailyWageArr=new Array();
//let totalWorkingDays=0;
let totEmpWage=0;
function sum(dailyWage)
{
	totEmpWage+= dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days:"+totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Emp Wage:"+totEmpWage);

function totalWages(totalWage,dailyWage)
{
	return totalWage+dailyWage;
}


console.log("UC7A- Emp Wage With reduce:"+empDailyWageArr.reduce(totalWages,0));

//UC 7B-Show the day along with Daily Wage using Array map helper function

let dailyCntr=0;
function mapDayWithWage(dailyWage)
{
	dailyCntr++;
	return dailyCntr+"="+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C-Show days when full time wage of 160 were earned

function fulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C- Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

//UC 7D- Find the first occurrence when full time wage was earned using find function

function findFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 7D- First time Fulltime wage was earned on Day:"+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E- Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 6E- Check All Element have Full Time Wage:"+fullDayWageArr.every(isAllFulltimeWage));

//UC 7F- Check if there is any part time wage
function isAnyPartTimeWage(dailyWage)
{
	return dailyWage.includes("80");
}
console.log("UC 7F- Check if any part time wage:"+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G- Find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage)
{
	if(dailyWage>0) return numOfDays+1;
	return numOfDays;
}
console.log("UC 7G- Number of Days Emp Worked:"+empDailyWageArr.reduce(totalDaysWorked,0));
