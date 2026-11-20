
// ==========================================
// WEEK 3 ASSIGNMENT
// TASK 4: CONDITIONAL STATEMENTS
// ==========================================

// 1. Check whether a number is positive, negative, or zero

console.log("----- 1. Positive, Negative or Zero -----");

let number = -5;

if (number > 0) {
    console.log(number + " is Positive");
} else if (number < 0) {
    console.log(number + " is Negative");
} else {
    console.log("The number is Zero");
}


// 2. Check whether a number is even or odd

console.log("\n----- 2. Even or Odd -----");

let num = 17;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// 3. Check eligibility based on age

console.log("\n----- 3. Age Eligibility -----");

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


// 4. Find the greatest among two and three numbers

console.log("\n----- 4. Greatest Number -----");

// Greatest among two numbers

let a = 25;
let b = 40;

if (a > b) {
    console.log(a + " is greater than " + b);
} else if (b > a) {
    console.log(b + " is greater than " + a);
} else {
    console.log("Both numbers are equal");
}

// Greatest among three numbers using nested if

let x = 45;
let y = 30;
let z = 60;

if (x > y) {
    if (x > z) {
        console.log(x + " is the greatest");
    } else {
        console.log(z + " is the greatest");
    }
} else {
    if (y > z) {
        console.log(y + " is the greatest");
    } else {
        console.log(z + " is the greatest");
    }
}


// 5. Assign grades based on marks

console.log("\n----- 5. Grade Calculation -----");

let marks = 85;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
} else if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 40) {
    console.log("Grade: D");
} else {
    console.log("Grade: F (Fail)");
}
