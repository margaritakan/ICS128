// Middle Number

let firstNumber = parseInt(prompt("Task 1: Please enter first number"));
let secondNumber = parseInt(prompt("Task 1: Please enter second number"));
let thirdNumber = parseInt(prompt("Task 1: Please enter third number"));
let middleNumber;

let array = [firstNumber, secondNumber, thirdNumber];

array.sort();
middleNumber = array[1];

document.getElementById("middleNumberTask").innerHTML = "The middle number of ("
    + firstNumber + ", " + secondNumber + ", " + thirdNumber + ") is: ";
        
if (middleNumber % 2 == 0) {
    document.getElementById("middleNumberAnswer").style.color = 'red';
    document.getElementById("middleNumberAnswer").innerHTML = middleNumber;
    
} else {
    document.getElementById("middleNumberAnswer").style.color ='green';
    document.getElementById("middleNumberAnswer").innerHTML = middleNumber;
}

// Grade Calculator

let percentage = prompt("Please input a percentage: ");
while (percentage > 100 || percentage < 0)
{
    percentage = prompt("Incorrect - not between 0-100");
}

document.getElementById("gradeCalculatorTask").innerHTML = "Task 2: The letter grade for " + percentage + "% is: ";

if (percentage >= 0 && percentage <= 49)
{
    document.getElementById("gradeCalculatorTaskAnswer").style.color = 'red';
    document.getElementById("gradeCalculatorTaskAnswer").innerHTML = "F";
} else if (percentage >= 50 && percentage <= 64)
{
    document.getElementById("gradeCalculatorTaskAnswer").style.color = 'black';
    document.getElementById("gradeCalculatorTaskAnswer").innerHTML = "D";
} else if (percentage >= 65 && percentage <= 79)
{
    document.getElementById("gradeCalculatorTaskAnswer").style.color = 'yellow';
    document.getElementById("gradeCalculatorTaskAnswer").innerHTML = "C";
} else if (percentage >= 80 && percentage <= 89)
{
    document.getElementById("gradeCalculatorTaskAnswer").style.color = 'blue';
    document.getElementById("gradeCalculatorTaskAnswer").innerHTML = "B";
} else if (percentage >= 90 && percentage <= 100)
{
    document.getElementById("gradeCalculatorTaskAnswer").style.color = 'green';
    document.getElementById("gradeCalculatorTaskAnswer").innerHTML = "A";
}

// Iteration question 
let string ="";
for (var i = 0; i < 4; i++) {
    for (var j = 0; j <= i; j++) {
        string += "#  ";
    }
    string += '<br>';
}
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5 -i; j++) {
        string += "#  ";
    }
    string += '<br>';
}
document.getElementById("thirdTask").innerHTML = string;

// The Smot That Swallowed Bangkok
let initialFogSize = 100;
let bangkokSize = 125000;
let percentageOfIcnrease = 6;
let fullEnvelopMin = 0;
let halfEnvelopMin = 0;

while (initialFogSize <= bangkokSize) {
    initialFogSize += initialFogSize * percentageOfIcnrease / 100;
    fullEnvelopMin += 1;
}

initialFogSize = 100;
while (initialFogSize <= bangkokSize / 2) {
    initialFogSize += initialFogSize * percentageOfIcnrease / 100;
    halfEnvelopMin += 1;
}

document.getElementById("fourthTask").innerHTML = "Fully envelop Bangkok in MINUTES: " + fullEnvelopMin
    + "<br>" + "Half envelop Bangkok in MINUTES: " + halfEnvelopMin;