// JavaScript Loops & Iteration Assignment


// SECTION 1
// Question 1: FizzBuzz Problem

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Question 2: Greatest Common Divisor (GCD)

let num1 = 48;
let num2 = 18;
let gcd = 1;

for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
}

console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);


// Question 3: Sum of Multiples

let sum = 0;

for (let i = 1; i < 50; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(`The sum of all multiples of 3 and 5 below 50 is ${sum}`);


// Question 4: Pattern Printing

// Pattern 1

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}


// Pattern 2: Floyd's Triangle

let number = 1;

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += number + " ";
        number++;
    }

    console.log(row);
}


// Pattern 3

let count = 1;

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += count + " ";
        count++;
    }

    console.log(row);
}


// Pattern 4

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 9; j++) {
        if (j >= 6 - i && j <= 4 + i) {
            row += "*";
        } else {
            row += "1";
        }
    }

    console.log(row);
}


// Pattern 5

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}


// Question 5: Advanced Loop Conditions

for (let i = 1; i <= 1000; i++) {
    let result = "";

    if (i % 2 === 0) {
        result += "Foo";
    }

    if (i % 3 === 0) {
        result += "Fizz";
    }

    if (i % 5 === 0) {
        result += "Buzz";
    }

    if (i % 7 === 0) {
        result += "Bar";
    }

    if (result === "") {
        console.log(i);
    } else {
        console.log(result);
    }
}


// SECTION 2


// Task 1: Print Hello World 10 times

for (let i = 1; i <= 10; i++) {
    console.log("Hello World");
}


// Task 2: Print multiples of 10

for (let i = 10; i <= 50; i += 10) {
    console.log(i);
}


// Task 3: Predict the Output

for (let i = 0; i < 5; i++) {
    const name = "Sindhura";
    console.log(i);
}


// console.log(i) would cause an error because
// let has block scope and i exists only inside the loop.


// Task 4: Predict the Output using var

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);


// Task 5: Multiplication Table of 5

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// Task 6: Print 5 stars

let row6 = "";

for (let i = 1; i <= 5; i++) {
    row6 += "*";
}

console.log(row6);


// Task 7: Pattern

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}


// Task 8: Square Pattern

for (let i = 1; i <= 4; i++) {
    let row = "";

    for (let j = 1; j <= 4; j++) {
        row += "*";
    }

    console.log(row);
}


// Task 9: Number Pattern

for (let i = 1; i <= 8; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}


// Task 10: Reverse Number Pattern

for (let i = 1; i <= 9; i++) {
    let row = "";

    for (let j = 9; j >= 10 - i; j--) {
        row += j;
    }

    console.log(row);
}


// Task 11: Reverse Decreasing Pattern

for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}


// Task 12: Number Pattern

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            row += "1";
        } else {
            row += "8";
        }
    }

    console.log(row);
}


// Task 13: Pattern

let num = 0;

for (let i = 1; i <= 9; i++) {
    let expressionNumber = "";

    for (let j = 1; j < i; j++) {
        expressionNumber += 10 - j;
    }

    let multiplier = 10 - i;

    if (i === 1) {
        expressionNumber = "0";
    }

    let result = Number(expressionNumber) * 9 + multiplier;

    console.log(
        `${expressionNumber} x 9 + ${multiplier} = ${result}`
    );
}


// Task 14: Pattern

let sequence = "";

for (let i = 1; i <= 9; i++) {
    sequence += i;

    let result = Number(sequence) * 8 + i;

    console.log(
        `${sequence} x 8 + ${i} = ${result}`
    );
}


// Task 15: Three Number Pattern

for (let i = 1; i <= 6; i++) {
    let first = i;
    let second = 10 - i;
    let third = (i - 1) * 2;

    console.log(first, second, third);
}