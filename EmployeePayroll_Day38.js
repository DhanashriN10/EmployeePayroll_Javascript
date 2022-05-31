/*UC 9:--Use the Daily Wage Map and
Daily Hour Map perform
following operations using
Arrow Functions
a. Calc total Wage and total hours worked
b. Show the full workings days, part working days and
no working days*/

//UC 9:-- Arrow Function

let empDailyHrsMap=new Map();
let empDailyWageArr= new Array();

const findTotal=(totalVal,dailyVal)=>{
	return totalVal+dailyVal;
}
let count =0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

console.log("UC9A- Emp Wage with Arrow:"+"TotalHours:"+totalHours+"Total Wages:"+totalSalary);

let nonWorkingDays=new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
empDailyHrsMap.forEach((value,key,map)=>{
	if(value==8) fullWorkingDays.push(key);
	else if(value==4) partWorkingDays.push(key);
	else nonWorkingDays.push(key);
});
console.log("Full Working Days:"+fullWorkingDays);
console.log("Part Working Days:"+partWorkingDays);
console.log("Non Working Days:"+nonWorkingDays);
