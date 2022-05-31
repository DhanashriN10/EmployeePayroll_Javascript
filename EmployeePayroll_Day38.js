/*Perform following Object
operations using Arrow
Functions
a. Calc total Wage and total hours worked
b. Show the full workings days using foreach
c. Show Part working days using Map by reducing to
String Array
d. No working days only using Map function*/

//UC 10A to UC 11D Using object Functions along with Arrow Functions

let empDailyHrsAndWageArr=new Array();

let totalWages=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0).reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0);
let totalHours=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0).reduce((totalHours,dailyHrsAndWage)=>totalHours+=dailyHrsAndWage.dailyHours,0);

console.log("UC 11A Total Hours:"+totalHours+"Total Wages:"+totalWages);

process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==8).forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==4).map(dailyHrsAndWage=>dailyHrsAndWage.toString());

console.log("\nUC 11C PartWorkingDayStrings:"+partWorkingDayStrArr);

let nonWorkingDayNums=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0).map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);

console.log("UC 11D NonWorkingDayNums:"+nonWorkingDayNums);

/*UC 11:--Ability to create
Employee Payroll Data
with id, name and
salary*/

//Empoyee Payroll Class

class EmployeePayrollData
{
	id;
	salary;


constructor(id,name,salary)
{
	this.id=id;
	this.name=name;
	this.salary=salary;
}

get name()
{
	return this._name;
}
set name(name)
{
	this._name=name;
}

toString()
{
	return "id="+this.id+",name="+this.name+",salary="+this.salary;
}
}

let employeePayrollData=new EmployeePayrollData(1,"Mark",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="john";
console.log(employeePayrollData.toString());

