let a = 10;
let b = 3;

console.log("\nActivity 1:")
// Task 1
const sum = a + b;
console.log(`${a} + ${b} = ${sum}`)
// Task 2
const sub = a - b;
console.log(`${a} - ${b} = ${sub}`)
// Task 3
const mul = a * b;
console.log(`${a} * ${b} = ${mul}`)
// Task 4
const div = a / b;
console.log(`${a} / ${b} = ${div}`)
// Task 5
const rem = a % b;
console.log(`${a} % ${b} = ${rem}`)

console.log("\nActivity 2:")
// Task 6
console.log(`Before increment, a = ${a}`)
a += 5;
console.log(`After increment, a = ${a}`)
// Task 7
console.log(`Before decrement, a = ${a}`)
a -= 5;
console.log(`After decrement, a = ${a}`)

console.log("\nActivity 3:")
// Task 8
const isGreater = a > b;
const isLesser = a < b;
console.log(`${a} > ${b} = ${isGreater}, while ${a} < ${b} = ${isLesser}`);
// Task 9
const isGreaterOrEqual = a >= b;
const isLesserOrEqual = a <= b;
console.log(`${a} >= ${b} = ${isGreaterOrEqual}, while ${a} <= ${b} = ${isLesserOrEqual}`);
// Task 10
const doubleEqual = a == b;
const tripleEqual = a === b;
console.log(`${a} == ${b} is ${doubleEqual} while ${a} === ${b} is ${tripleEqual}`);

console.log("\nActivity 4:")
// Task 11
const andOperator = a > 5 && b < 5;
console.log(`${a} > 5 && ${b} < 5 = ${andOperator}`);
// Task 12
const orOperator = a > 5 || b > 5;
console.log(`${a} > 5 || ${b} > 5 = ${orOperator}`);
// Task 13 
const negationOperator = !(a < b);
console.log(`Negation of ${a} < ${b} = ${negationOperator}`);
// Task 14
let c = -5;

console.log("\nActivity 5:")
// Task 15
c > 0 ? console.log(`${c} is Positive`) : console.log(`${c} is Negative (or maybe zero)`);