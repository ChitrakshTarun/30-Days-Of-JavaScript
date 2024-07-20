// Task 1
const name = "Chitraksh";
const age = 20;
console.log(`Hi, I am ${name}, and I am ${age} years old.`)

// Task 2 
console.log(`This is a multiline string,
which goes into a second line.`)

// Task 3
const arr = [1, 4, 9, 16, 25];
const [first, second] = arr;
console.log(`First element of the array: ${first}. Second element of the array: ${second}.`);

// Task 4
const bookObject = {
  title: "Diary of a Wimpy Kid",
  author: "Jeff Kinney",
  year: "2006"
}
const {title, author} = bookObject;
console.log(`Book: ${title}. Author: ${author}.`)

// Task 5
const newArr = [...arr, 36, 49, 64];
console.log(`New array formed after spread operator: ${newArr}`);

// Task 6
const sumFunction = (...args) => {
  let sum = 0;
  args.forEach((i) => sum += i);
  return sum;
}
console.log(`Sum of first 10 natural numbers: ${sumFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);

// Task 7
const productFunction = (a, b = 1) => a*b;
console.log(`Product Function with both values assigned, 5 x 6 = ${productFunction(5, 6)}`);
console.log(`Product Function with one value assigned, 5 x default(1) = ${productFunction(5)}`);

// Task 8
const myName = "Chitraksh";
const myAge = 20;
const myFunction = () => console.log("Hello from Chitraksh!");
const myObject = {myName, myAge, myFunction};
console.log("Object via Object Enhanced Literals:", myObject);

// Task 9
const myNewObject = {
  myName,
  myAge,
  isAdult: myAge >= 18,
}
console.log("Object with Computer Properties:", myNewObject);