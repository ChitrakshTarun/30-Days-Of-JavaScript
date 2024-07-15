// Task 1
const num = 15;
if(num < 0) {
  console.log(`${num} is Negative.`)
} else if (num == 0) {
  console.log(`${num} is 0.`);
} else {
  console.log(`${num} is Positive.`);
}

// Task 2
const age = 17;
if (age >= 18) {
  console.log("Person can vote.");
} else {
  console.log("Person cannot vote.")
}

// Task 3 
const a = 23;
const b = 3;
const c = 14;

if(a > b){
  if(a > c){
    console.log(`${a} is the greatest of the 3.`)
  } else {
    console.log(`${c} is the greatest of the 3.`)
  }
} else if(b > c) {
  console.log(`${b} is the greatest of the 3.`)
} else {
  console.log(`${c} is the greatest of the 3.`)
}

// Task 4
const todayAsNumber = 1;

switch(todayAsNumber) {
  case 0:
    console.log("Today is Sunday.");
    break;
  case 1:
    console.log("Today is Monday.");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  default: 
    console.log("Invalid input.");
    break;
}

// Task 5
const grade = 64;
switch(true) {
  case(grade >= 85):
    console.log("Grade A");
    break;
  case(grade >= 75):
    console.log("Grade B");
    break;
  case(grade >= 65):
    console.log("Grade C");
    break;
  case(grade >= 55):
    console.log("Grade D");
    break;
  case(grade < 55):
    console.log("Grade F");
    break;
  default: 
    console.log("Invalid Grade.");
    break;
}

// Task 6
const evenOrOdd = 5;

evenOrOdd % 2 == 0 ? console.log(`${evenOrOdd} is even.`) : console.log(`${evenOrOdd} is odd.`)

// Task 7 
const year = 2024;

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
  console.log(`${year} is a Leap Year.`)
} else {
  console.log(`${year} is NOT a Leap Year.`)
}