// Task 1
function outerFunction() {
	const outerVariable = "Task 1: Access outer variable in inner function";
	return function innerFunction() {
		return outerVariable;
	};
}
const task1 = outerFunction();
console.log(task1());

// Task 2
function counter() {
	let count = 0;
	return {
		incrementCounter() {
			count++;
			console.log(`Task 2: Count after increment = ${count} `);
		},
		get value() {
			console.log(`Task 2: Current Count = ${count} `);
		},
	};
}
const task2 = counter();
task2.value;
task2.incrementCounter();
task2.incrementCounter();
task2.incrementCounter();

// Task 3
function generateID() {
	const charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let uuid = "";
	for (let i = 0; i < 20; i++) {
		uuid += charlist.charAt(Math.floor(Math.random() * charlist.length));
	}
	return {
		get id() {
			console.log(`Task 3: UUID = ${uuid}`);
		},
	};
}
const task3Id1 = generateID();
const task3Id2 = generateID();
const task3Id3 = generateID();
task3Id1.id;
task3Id2.id;
task3Id3.id;

// Task 4
function getUsername(username) {
	return function () {
		console.log(`Task 4: Username set to ${username}`);
	};
}
const task4 = getUsername("Chitraksh");
task4();

// Task 5
function arrayOfFunctions(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(function () {
			console.log("Task 5: This function's index is", i);
		});
	}
	return arr;
}
const task5 = arrayOfFunctions(5);
task5.forEach((func) => func());

// Task 6
function manageCollection() {
	let collection = [];
	return {
		addItem(i) {
			collection.push(i);
			console.log(`Task 6: Added ${i} to the collection. Current collection: ${collection}`);
		},
		removeItem(i) {
			collection = collection.filter((item) => item !== i);
			console.log(`Task 6: Removed ${i} from the collection. Current collection: ${collection}`);
		},
		listItems() {
			console.log(`Task 6: Current collection: ${collection}`);
		},
	};
}

let task6 = manageCollection();
task6.addItem("Item 1");
task6.addItem("Item 2");
task6.addItem("Item 3");
task6.addItem("Item 4");
task6.removeItem("Item 3");
task6.listItems();

// Task 7
function addToCache() {
	const cache = {};
	return function (i) {
		if (i in cache) {
			console.log(`Task 7: Identified ${cache[i]} in cache.`);
		} else {
			let res = i;
			cache[i] = res;
			console.log(`Task 7: Added ${cache[i]} to cache.`);
		}
	};
}
const task7 = addToCache();
task7(1);
task7(2);
task7(3);
task7(3);

// Task 8
function memoizedFactorial() {
	const cache = {};
	return function (num) {
		if (num in cache) {
			console.log(`Task 8: Identified '${num}! = ${cache[num]}' in cache.`);
		} else {
			let res = 1;
			for (let i = num; i > 1; i--) {
				res *= i;
			}
			cache[num] = res;
			console.log(`Task 8: ${num}! = ${res}, result added to cache`);
		}
	};
}
const task8 = memoizedFactorial();
task8(1);
task8(2);
task8(3);
task8(3);
