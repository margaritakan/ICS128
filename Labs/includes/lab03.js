// Part 1 Exercise 1
function letterCount(string, char) {  
    let count = 0;

    for (let i=0; i < string.length; i++) {
        if (string.charAt(i) == char)
        {
            count+=1;
        }
    }
     return count;
 }

 let string = prompt("Please enter the string");
 let letter = prompt("Please enter the letter you want to count");
 document.getElementById("exerciseOne").innerHTML = 
    "<b>The string is: </b>" + string + ". <br>" + 
    "The letter \"" + letter + "\" appears " + letterCount(string, letter) + " times."; 

// Part 1 Exercise 2
// var labDay = new Date();
// var now = Date.now();
// console.log("labDay is " + labDay);
// console.log(labDay.toDateString());
// console.log(labDay.toTimeString());
// console.log("labDay as UTC is " + labDay.getTime());
// console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// console.log(labDay.getHours() + " : " + labDay.getMinutes());
// labDay = new Date(2022,2,1);
// console.log(now);
// var errorDate = new Date(2016, 33, 1);
// console.log(errorDate);
// var invalidDate = new Date("Funuary 3, 2018");
// console.log(invalidDate);
// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
// console.log(labDay.toLocaleString('de-DE', options));
// var msDay = 24 * 60 * 60 * 1000;
// var mslabDay = now;
// labDay = new Date(mslabDay + msDay);
// console.log(labDay);



function daysInMonth (year, month) { // use 1 for Jan, 2 for Feb, etc
    return new Date(year, month, 0).getDate();
}

function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6;
}

function weekdaysInMonth(year, month) {
    var countWeekdays = 0;
    var days = daysInMonth(year, month);

    for (let i = 0; i < days; i++) {
        console.log("Y=" + year + ", M=" + month);
        console.log(new Date(year, month, i + 1).toDateString());
        if (isWeekday(year, month, i + 1)) {
            console.log("its a weekday!");
            countWeekdays++;
        }
        else {
            console.log("Its not a weekday");
            }
    }
    return countWeekdays;
}


let vYear = parseInt(prompt("Please enter the year"));
let vMonth = parseInt(prompt("Please enter the month( e.g. January - 1, February - 2)"));
let monthWord;
let wage = parseInt(prompt("Please enter the hourly wage"));

switch (vMonth) {
    case 1: 
        monthWord = 'January';
        break;
    case 2: 
        monthWord = 'February';
        break;
    case 3: 
        monthWord = 'March';
        break;
    case 4: 
        monthWord = 'April';
        break;
    case 5: 
        monthWord = 'May';
        break;
    case 6: 
        monthWord = 'June';
        break;
    case 7: 
        monthWord = 'July';
        break;
    case 8: 
        monthWord = 'August';
        break;
    case 9: 
        monthWord = 'September';
        break;
    case 10: 
        monthWord = 'October';
        break;
    case 11: 
        monthWord = 'November';
        break;
    case 12: 
        monthWord = 'December';
        break;
}

document.getElementById("exerciseTwo").innerHTML = "Month: " + monthWord + "<br>"
    + "Year: " + vYear + "<br>Weekdays: " + weekdaysInMonth(vYear, vMonth)
    + "<br>Salary: $" + wage.toFixed(2) + "<br>Pay: $"
    + parseInt(weekdaysInMonth(vYear, vMonth) * wage).toFixed(2);


// Part 2
//document.getElementById("exerciseTwo").innerHTML = "The future value is: " + "<br>"
    
    