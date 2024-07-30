// Task 1
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};
const task1 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 1: Bubble Sorted array = ${bubbleSort(task1)}`);

// Task 2
const selectionSort = (arr) => {
	let min = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min !== i) {
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;
};
const task2 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 2: Selection Sorted array = ${selectionSort(task2)}`);

// Task 3
const quickSort = (arr) => {
	if (arr.length <= 1) return arr;
	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};
const task3 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 3: Quick Sorted array = ${quickSort(task3)}`);

// Task 4
const linearSearch = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
};
const task4 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 4: Linear Searching... 22 is located at index ${linearSearch(task4, 22)}`);

// Task 5
const binarySearch = (arr, num, low, high) => {
	if (low > high) return -1;
	const mid = Math.floor((low + high) / 2);
	if (arr[mid] == num) {
		return mid;
	} else if (arr[mid] < num) {
		return binarySearch(arr, num, mid + 1, high);
	}
	return binarySearch(arr, num, low, mid - 1);
};
const task5 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 7: Binary Searching... 22 is located at index ${binarySearch(task5, 22, 1, 7)}`);

// Task 6
const characterCount = (str, char) => {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.toLowerCase().charAt(i) == char.toLowerCase()) count++;
	}
	return count;
};
const task6 = "Chai Aur Code";
console.log(`Task 6: Occurences of C in Chai aur Code = ${characterCount("Chai aur Code", "c")}`);

// Task 7
const longestSubstring = (str) => {
	let max = 0;
	let start = 0;
	const seen = new Map();
	for (let end = 0; end < str.length; end++) {
		const curr = str[end];
		if (seen.has(curr)) {
			start = Math.max(seen.get(curr) + 1, start);
		}
		seen.set(curr, end);
		max = Math.max(max, end - start + 1);
	}
	return max;
};
const task7 = "acbacbacbacbcabcbcabca";
console.log(`Task 7: Length of longest substring without repeating = ${longestSubstring(task7)}`);

// Task 8
const rotateArray = (arr, k) => {
	k = k % arr.length;
	return [...arr.slice(-k), ...arr.slice(0, -k)];
};
const task8 = [64, 34, 25, 12, 22, 11, 90];
console.log(`Task 8: Array rotated by 3 positions = ${rotateArray(task8, 3)}`);

// Task 9
const mergeSortedArrays = (arr1, arr2) => {
	let mergedArray = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		arr1[i] < arr2[j] ? (mergedArray.push(arr1[i]), i++) : (mergedArray.push(arr2[j]), j++);
	}
	while (i < arr1.length) {
		mergedArray.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		mergedArray.push(arr2[j]);
		j++;
	}
	return mergedArray;
};
const task9arr1 = [64, 34, 25, 12, 22, 11, 90];
const task9arr2 = [65, 33, 24, 13, 23, 10, 91];
bubbleSort(task9arr1);
selectionSort(task9arr2);
console.log(`Task 9: ${task9arr1} and ${task9arr2} merged and sorted --> ${mergeSortedArrays(task9arr1, task9arr2)}`);
