const arr1 = [1, 2, 3, 4, 5];

// Task 1 
console.log(arr1);

// Task 2
console.log(`First element: ${arr1[0]}, Last element: ${arr1[arr1.length - 1]}`);

// Task 3
arr1.push(6);
console.log(`After pushing 6:`, arr1);

// Task 4
arr1.pop();
console.log(`After popping:`, arr1);

// Task 5
arr1.shift();
console.log(`After shifting:`, arr1);

// Task 6
arr1.unshift(1);
console.log(`After unshifting 1:`, arr1);

// Task 7
const arrDouble = arr1.map((i) => i*2);
console.log(`arr1 but doubled:`, arrDouble);

// Task 8
const arrEven = arr1.filter((i) => i%2 == 0);
console.log(`arr1 but even:`, arrEven);

// Task 9
const arrReduce = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of elements of arr1 =`, arrReduce);

// Task 10
for(let i = 0; i < arr1.length; i++){
  console.log(`Looping using for: ${arr1[i]}`);
}

// Task 11
arr1.forEach((i) => console.log(`Looping using forEach: ${i}`));


const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Task 12
console.log(arr2);

// Task 13
console.log(`Array element in 2nd row, 3rd column: ${arr2[1][2]}`);