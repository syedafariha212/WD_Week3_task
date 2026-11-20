
// ==========================================
// WEEK 3 ASSIGNMENT
// TASK 5: LOOPS
// ==========================================


// 1. FOR LOOP - Print numbers from 1 to 10

console.log("----- 1. For Loop: Numbers 1 to 10 -----");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. WHILE LOOP - Print even numbers from 2 to 20

console.log("\n----- 2. While Loop: Even Numbers -----");

let even = 2;

while (even <= 20) {
    console.log(even);
    even += 2;
}


// 3. DO...WHILE LOOP - Print odd numbers from 1 to 19

console.log("\n----- 3. Do...While Loop: Odd Numbers -----");

let odd = 1;

do {
    console.log(odd);
    odd += 2;
} while (odd <= 19);


// 4. Multiplication table of 5

console.log("\n----- 4. Multiplication Table of 5 -----");

let tableNumber = 5;

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// 5. Find the sum of numbers from 1 to 10

console.log("\n----- 5. Sum of Numbers -----");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 10: " + sum);


// 6. Print numbers in reverse order from 10 to 1

console.log("\n----- 6. Reverse Counting -----");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 7. Demonstrate increment and decrement in loops

console.log("\n----- 7. Increment and Decrement -----");

// Increment

let count = 1;

while (count <= 5) {
    console.log("Increment: " + count);
    count++;
}

// Decrement

let reverse = 5;

while (reverse >= 1) {
    console.log("Decrement: " + reverse);
    reverse--;
}
