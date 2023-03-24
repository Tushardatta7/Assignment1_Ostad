
const prompt = require("prompt-sync") ()

var number;
number = prompt("Number");
gradeCalculator(number);

function gradeCalculator(num) {
    if (num<=100 && num>=90) {
        console.log("A") 
    }
    else if (num<=89 && num>=80) {
        console.log("B") 
    }
    else if (num<=79 && num>=70) {
        console.log("C")
    }
    else if (num<=69 && num>=60) {
        console.log("D")
    }
    else if (num<=59 && num>=0) {
        console.log("F")
    }
    else{
        console.log("You put wrong number")
    }
}
