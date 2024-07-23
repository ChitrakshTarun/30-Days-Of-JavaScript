// Task 1
const task1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 1 Resolved.");
	}, 500);
});
task1.then((res) => console.log(res));
console.log(task1);

// Task 2
const task2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Task 2 Rejected.");
	}, 1000);
});
task2.catch((err) => console.error(err));
console.log(task2);

// Task 3
const task3data1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 3 Data 1 Resolved.");
	}, 1500);
});
const task3data2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 3 Data 2 Resolved.");
	}, 2000);
});
const task3data3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 3 Data 3 Resolved.");
	}, 2500);
});
const task3data4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 3 Data 4 Resolved.");
	}, 3000);
});
task3data1
	.then((res) => {
		console.log(res);
		return task3data2;
	})
	.then((res) => {
		console.log(res);
		return task3data3;
	})
	.then((res) => {
		console.log(res);
		return task3data4;
	})
	.then((res) => {
		console.log(res);
	});

// Task 4
const task4 = async () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Task 4 Resolved.");
		}, 3500);
	});
	try {
		const res = await promise;
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
task4();

// Task 5
const task5 = async () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("Task 5 Rejected.");
		}, 4000);
	});
	try {
		const res = await promise;
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
task5();

// Task 6
const task6 = () => {
	fetch("https://fakestoreapi.com/products/1")
		.then((res) => res.json())
		.then((data) => {
			console.log("Task 6", data);
		})
		.catch((err) => {
			console.log(err);
		});
};
task6();

// Task 7
const task7 = async () => {
	try {
		const res = await fetch("https://fakestoreapi.com/products/1");
		const data = await res.json();
		console.log("Task 7", data);
	} catch (err) {
		console.log(err);
	}
};
task7();

// Task 8
const task8data1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 8 Data 1 Resolved.");
	}, 4500);
});
const task8data2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 8 Data 2 Resolved.");
	}, 5000);
});
const task8data3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 8 Data 3 Resolved.");
	}, 5500);
});
Promise.all([task8data1, task8data2, task8data3]).then((values) => {
	console.log("All promises for Task 8 Resolved.");
	values.forEach((e) => console.log(e));
});

// Task 9
const task9data1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 9 Data 1 Resolved.");
	}, 6000);
});
const task9data2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 9 Data 2 Resolved.");
	}, 6500);
});
const task9data3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Task 9 Data 3 Resolved.");
	}, 7000);
});
Promise.race([task9data1, task9data2, task9data3]).then((e) => console.log(`First promise that resolved: ${e}`));
