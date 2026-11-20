
// ==========================================
// WEEK 3 ASSIGNMENT
// TASK 6: JAVASCRIPT PRACTICE PROGRAMS
// ==========================================


// 1. Check whether a number is divisible by 5 and 3

console.log("----- 1. Divisibility Check -----");

let number = 15;

if (number % 5 === 0 && number % 3 === 0) {
    console.log(number + " is divisible by both 5 and 3");
} else {
    console.log(number + " is not divisible by both 5 and 3");
}


// 2. Calculate electricity bill based on units

console.log("\n----- 2. Electricity Bill -----");

let units = 120;
let bill = 0;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = (100 * 2) + ((units - 100) * 3);
} else {
    bill = (100 * 2) + (100 * 3) + ((units - 200) * 5);
}

console.log("Electricity Units: " + units);
console.log("Total Electricity Bill: Rs. " + bill);


// 3. Find the factorial of a number

console.log("\n----- 3. Factorial Calculation -----");

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial of " + n + " is: " + factorial);


// 4. Check whether a year is a leap year

console.log("\n----- 4. Leap Year Check -----");

let year = 2024;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}


// 5. Count the number of digits in a number

console.log("\n----- 5. Count Digits -----");

let value = 12345;
let temp = Math.abs(value);
let digitCount = 0;

if (temp === 0) {
    digitCount = 1;
} else {
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digitCount++;
    }
}

console.log("Number: " + value);
console.log("Total digits: " + digitCount);
