import { sum } from "./01-module.js";
import { createPerson } from "./02-module.js";
import { sub, mul, div } from "./03-module.js";
import mod from "./04-module.js";
import { name, age, gender, greet, info } from "./05-module.js";
import lodash from "lodash";
import axios from "axios";

// Task 1
console.log(`Task 1: 23 + 3 = ${sum(23, 3)}`);

// Task 2
console.log(`Task 2: ${createPerson("Chitraksh", "20", "Male")}`);

// Task 3
console.log(`Task 3: 23 - 3 = ${sub(23, 3)}`);
console.log(`Task 3: 23 * 3 = ${mul(23, 3)}`);
console.log(`Task 3: 23 / 3 = ${div(23, 3)}`);

// Task 4
console.log(`Task 4: 23 % 3 = ${mod(23, 3)}`);

// Task 5
greet(name);
info(age, gender);

// Task 6
const arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
const sumOfArrayElements = lodash.sum(arr);
console.log(`Task 6: Sum of squares of numbers 1 to 10 = ${sumOfArrayElements}.`);

// Task 7
axios
	.get("https://fakestoreapi.com/products/1")
	.then((res) => {
		const data = res.data;
		console.log("Task 7:", data);
	})
	.catch((err) => console.log(err.message));
