/*eslint-env browser*/

//STEP 1
//var getDaysInMonth = function(month,year) {
//     return new Date(year, month, 0).getDate();
//};
//console.log("There are " + getDaysInMonth(1, 2012) + " days in January.");
//console.log("There are " + getDaysInMonth(2, 2012) + " days in February.");
//console.log("There are " + getDaysInMonth(3, 2012) + " days in March.");
//console.log("There are " + getDaysInMonth(4, 2012) + " days in April.");
//console.log("There are " + getDaysInMonth(5, 2012) + " days in May.");
//console.log("There are " + getDaysInMonth(6, 2012) + " days in June.");
//console.log("There are " + getDaysInMonth(7, 2012) + " days in July.");
//console.log("There are " + getDaysInMonth(8, 2012) + " days in August.");
//console.log("There are " + getDaysInMonth(9, 2012) + " days in September.");
//console.log("There are " + getDaysInMonth(10, 2012) + " days in October.");
//console.log("There are " + getDaysInMonth(11, 2012) + " days in November.");
//console.log("There are " + getDaysInMonth(12, 2012) + " days in December.");
 
//STEP 2
//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var particularDate = new Date(window.prompt("Enter a date in this format: 11/11/1111."));
//console.log(months[particularDate.getMonth()]);

//STEP 3
//enterDate = window.prompt("Enter a date in this format: 11/11/1111.");
//var date = new Date(enterDate);
//if (date.getDay() === 0 | date.getDay() === 6) {
// window.alert(enterDate + " lands on a weekend!");
//} else {
// window.console.log(enterDate + " falls on a weekday!");
//}

//STEP 4
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//var today = new Date();
//console.log("Yesterday was " + days[today.getDay() -1 ] + ".");

//STEP 5. WHEN TESTING THIS STEP, MAKE SURE LINE 35 ISN'T COMMENTED OUT
var today = new Date();
    var todayDay = days[today.getDay()];
    console.log(todayDay.slice(0, 1));