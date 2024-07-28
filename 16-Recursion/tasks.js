// Task 1
const factorial = (n) => {
	if (n == 0 || n == 1) return 1;
	return n * factorial(n - 1);
};
console.log(`Task 1: 3! = ${factorial(3)}`);
console.log(`Task 1: 5! = ${factorial(5)}`);
console.log(`Task 1: 10! = ${factorial(10)}`);

// Task 2
const fibonacci = (n) => {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(`Task 2: 3rd Fibonacci Number = ${fibonacci(3)}`);
console.log(`Task 2: 5th Fibonacci Number = ${fibonacci(5)}`);
console.log(`Task 2: 10th Fibonacci Number = ${fibonacci(10)}`);

// Task 3
const sumOfArrayElements = (arr, size) => {
	if (size <= 0) return 0;
	return arr[size - 1] + sumOfArrayElements(arr, size - 1);
};
console.log(`Task 3: Sum of first 10 Natural Numbers = ${sumOfArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)}`);
console.log(`Task 3: Sum of first 5 Odd Numbers = ${sumOfArrayElements([1, 3, 5, 7, 9], 5)}`);
console.log(`Task 3: Sum of first 5 Even Numbers = ${sumOfArrayElements([2, 4, 6, 8, 10], 5)}`);

// Task 4
const maxElementInArray = (arr, size) => {
	if (size == 1) return arr[0];
	return Math.max(arr[size - 1], maxElementInArray(arr, size - 1));
};
console.log(`Task 4: Maximum element in [1, 2, 3, 4, 5] = ${maxElementInArray([1, 2, 3, 4, 5], 5)}`);
console.log(`Task 4: Maximum element in [48, 65, 9, 49] = ${maxElementInArray([48, 65, 9, 49], 4)}`);
console.log(`Task 4: Maximum element in [100, 101, 100, 100] = ${maxElementInArray([10000, 10001, 10000, 10000], 4)}`);

// Task 5
const reverseString = (str) => {
	if (str == "") return "";
	return reverseString(str.substr(1)) + str.charAt(0);
};
console.log(`Task 5: Chitraksh reversed = ${reverseString("Chitraksh")}`);
console.log(`Task 5: ChaiCode reversed = ${reverseString("ChaiCode")}`);
console.log(`Task 5: JavaScript reversed = ${reverseString("JavaScript")}`);

// Task 6
const isStringPalindrome = (str) => {
	if (str.length == 1) return true;
	if (str.toLowerCase().charAt(0) != str.toLowerCase().charAt(str.length - 1)) return false;
	return isStringPalindrome(str.substr(1, str.length - 2));
};
console.log(`Task 6: Checking if Chitraksh is a palindrome --> ${isStringPalindrome("Chitraksh")}`);
console.log(`Task 6: Checking if Tacocat is a palindrome --> ${isStringPalindrome("Tacocat")}`);
console.log(`Task 6: Checking if JavaScript is a palindrome --> ${isStringPalindrome("JavaScript")}`);

// Task 7
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
const task7 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
console.log(`Task 7: Binary Searching... 16 is located at index ${binarySearch(task7, 16, 0, 9)}`);
console.log(`Task 7: Binary Searching... 49 is located at index ${binarySearch(task7, 49, 0, 9)}`);
console.log(`Task 7: Binary Searching... 1 is located at index ${binarySearch(task7, 1, 0, 9)}`);

// Task 8
const countElementInArray = (arr, num, size) => {
	if (size == 0) return 0;
	return (arr[size - 1] == num ? 1 : 0) + countElementInArray(arr, num, size - 1);
};
const task8 = [2, 1, 2, 0, 2, 0, 1, 1, 2, 1, 0, 2, 1, 0, 1, 2, 2, 2, 1, 1];
console.log(`Task 8: Occurences of 0 in array = ${countElementInArray(task8, 0, 20)}`);
console.log(`Task 8: Occurences of 1 in array = ${countElementInArray(task8, 1, 20)}`);
console.log(`Task 8: Occurences of 2 in array = ${countElementInArray(task8, 2, 20)}`);
