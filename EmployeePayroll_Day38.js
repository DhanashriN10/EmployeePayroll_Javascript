//Ability to store the Day,Hours Worked andWage Earned in a singleobject.

//UC 10:-- Object Creation

const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;
const NUM_OF_WORKING_DAYS = 20;
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
let empHrs=0;

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArr=new Array();

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

function calcDailyWage(empHrs)
{
	return empHrs*WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck= Math.floor(Math.random()*10)%3;
	let totalEmpHrs=getWorkingHours(empCheck);
	totalEmpHrs+= empHrs;
	empDailyHrsAndWageArr.push(
	{
		dayNum:totalWorkingDays,
		dailyHours:empHrs,
		dailyWage:calcDailyWage(empHrs),
		toString(){
			return '\nDay'+this.dayNum+'=>Working Hours is:'+this.dailyHours+'And Wage Earned='+this.dailyWage
		},
	});
}

console.log("UC 10 Showing Daily Hours Worked and Wage Earned:"+empDailyHrsAndWageArr);