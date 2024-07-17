// Task 1
function evenOrOdd(n) {
  n % 2 == 0 ? console.log(`${n} is even.`) : console.log(`${n} is odd.`);
}
evenOrOdd(5);

// Task 2
function calculateSquare(n) {
  return n * n;
}
const squareOfFive = calculateSquare(5);
console.log(`5 ^ 2 = ${squareOfFive}`);

// Task 3
function greaterOfTwo(a, b) {
  if(a == b) {
    console.log(`The numbers are equal`);
  } else if (a > b){
    console.log(`${a} > ${b}`);
  } else {
    console.log(`${a} < ${b}`);
  }
}
greaterOfTwo(15, 7);

// Task 4
function concatenateStrings(a, b) {
  return a + b;
}
const myString = concatenateStrings("Chai", "Code");
console.log(`Chai + Code = ${myString}`);

// Task 5 
const sumOfTwo = (a, b) => a + b;
const sum = sumOfTwo(23, 3);
console.log(`23 + 3 = ${sum}`);

// Task 6
const strContainsChar = (str, char) => str.includes(char);
const charCheck = strContainsChar("Chai aur Code", "a");
charCheck ? console.log("'Chai aur Code' contains 'a'.") : console.log("'Chai aur Code' does NOT contain 'a'.");

// Task 7
function productOfTwo (a, b = 10) {
  return a * b;
}
const product = productOfTwo(5);
console.log(`Product = ${product}`);

// Task 8
function greeting(name, age = 18) {
  console.log(`Welcome ${name}! Your age is set to be ${age}.`);
}
greeting("Chitraksh", 20);

// Task 9
function func(n) {
  console.log(`Lower order function executed x${n}`)
}
function repeatFuncNTimes(func, n) {
  for(let i = 1; i <= n; i ++){
    func(i);
  }
}
repeatFuncNTimes(func, 5);

// Task 10
function multiplyByTwo (n){
  return n * 2;
}
function addFive (n){
  return n + 5;
}
function acceptTwoFunctions(n, func1, func2){
  const num = func1(n);
  return func2(num); 
}
console.log(`(34 * 2) + 5 = ${acceptTwoFunctions(34, multiplyByTwo, addFive)}`);