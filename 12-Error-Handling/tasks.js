// Task 1
const task1 = () => {
	throw new Error("Task 1 rejected");
};
try {
	task1();
} catch (err) {
	console.error(err.message);
}

// Task 2
const task2 = (a, b) => {
	try {
		if (b !== 0) {
			console.log(`Task 2 (Resolved): ${a} / ${b} = ${a / b}`);
		} else {
			throw new Error("Task 2 (Rejected): Denominator cannot be 0.");
		}
	} catch (err) {
		console.error(err.message);
	}
};
task2(10, 2);
task2(5, 0);

// Task 3
const task3 = () => {
	try {
		console.log("Task 3: Try Block");
		throw new Error("Task 3: Catch Block");
	} catch (err) {
		console.error(err.message);
	} finally {
		console.log("Task 3: Finally Block.");
	}
};
task3();

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "(Custom Error)";
	}
}
// Task 4
try {
	throw new CustomError("Task 4: Custom Error thrown and caught.");
} catch (err) {
	console.error(`${err.message} ${err.name}`);
}

// Task 5
const task5 = (str) => {
	try {
		if (str) {
			console.log(`Task 5 (Resolved): Not an empty string. String: ${str}`);
		} else {
			throw new CustomError("Task 5 (Rejected): Empty String.");
		}
	} catch (err) {
		console.error(`${err.message} ${err.name}`);
	}
};
task5("Chai");
task5("");

// Task 6
const task6 = () => {
	const randomise = Math.random() < 0.5;
	return new Promise((resolve, reject) => {
		randomise
			? resolve("Task 6: Resolved since randomise = true.")
			: reject("Task 6: Rejected since randomise = false.");
	});
};
task6()
	.then((res) => console.log(res))
	.catch((err) => console.error(err));

// Task 7
const task7 = async () => {
	const randomise = Math.random() < 0.5;
	const promise = new Promise((resolve, reject) => {
		randomise
			? resolve("Task 7: Resolved since randomise = true.")
			: reject("Task 7: Rejected since randomise = false.");
	});
	try {
		const res = await promise;
		console.log(res);
	} catch (err) {
		console.error(err);
	}
};
task7();

// Task 8
fetch("https://someinvalidurlidklmao.com")
	.then((res) => console.log(res))
	.catch((err) => console.error("Task 8:", err));

// Task 9
const task9 = async () => {
	try {
		const res = await fetch("https://someinvalidurlidklmao.com");
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.error("Task 9:", err);
	}
};
task9();
