// Task 1
console.log("\nPrinting 1-10 using For Loop")
for(let i = 1; i <= 10; i++){
  console.log(i);
}

// Task 2
console.log("\nTable of 5:");
for(let i = 1; i <= 10; i++){
  console.log(`5 x ${i} = ${5*i}`);
}

// Task 3
let sum = 0;
let a = 10;
while(a > 0){
  sum += a;
  a--;
}
console.log(`\nSum of numbers from 1 to 10: ${sum}`);

// Task 4
console.log("\nPrinting 10-1 using While Loop")
let b  = 10;
while(b > 0){
  console.log(b);
  b--;
}

// Task 5
console.log("\nPrinting 1-5 using Do While Loop")
let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 5);

// Task 6
let d = 7;
let fact = 1;
do {
  fact *= d;
  d--;
} while (d > 0);
console.log(`\nFactorial = ${fact}`);

// Task 7
console.log("\nPattern:")
for(let i = 1; i <= 5; i++){
  let row = ""
  for(let j = 1; j <= i; j++){
    row += "*";
  }
  console.log(row);
}

// Task 8
console.log("\nPrinting 1-10 using For Loop, except 5")
for(let i = 1; i <= 10; i++){
  if(i == 5) continue;
  console.log(i);
}

// Task 9
console.log("\nPrinting 1-10 using For Loop, except only till before 7")
for(let i = 1; i <= 10; i++){
  if(i == 7) break;
  console.log(i);
}
