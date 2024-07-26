// Task 1
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(`Task 1: Hello ${this.name}! You are ${this.age} years old`);
	}
}
const myPerson = new Person("Chitraksh", 20);
myPerson.greet();

// Task 2
Person.prototype.updateAge = function (newAge) {
	this.age = newAge;
	console.log(`Task 2: Age updated to ${this.age}`);
};
myPerson.updateAge(20);

// Task 3
class Student extends Person {
	constructor(name, age, studentId) {
		super(name, age);
		this.studentId = studentId;
	}
	logId() {
		console.log(`Task 3: Student ID for ${this.name} set as ${this.studentId}`);
	}
}
const myStudent = new Student("Chitraksh", 20, 1234);
myStudent.logId();

// Task 4
Student.prototype.greet = function () {
	console.log(`Task 4: Hello ${this.name}! You are ${this.age} years old and your Student ID is ${this.studentId}`);
};
myStudent.greet();

// Task 5
class StaticPerson extends Person {
	constructor(name, age, greet, updateAge) {
		super(name, age, greet, updateAge);
	}
	static genericGreet() {
		return "Task 5: This is a generic greeting";
	}
}
console.log(StaticPerson.genericGreet());

// Task 6
class PersonWithStudentCount extends Person {
	static studentCount = 0;
	constructor(name, age, greet, updateAge) {
		super(name, age, greet, updateAge);
		PersonWithStudentCount.studentCount += 1;
	}
}
const task6one = new PersonWithStudentCount("a", 20);
const task6two = new PersonWithStudentCount("b", 20);
const task6three = new PersonWithStudentCount("c", 20);
const task6four = new PersonWithStudentCount("d", 20);
const task6five = new PersonWithStudentCount("e", 20);
const task6six = new PersonWithStudentCount("f", 20);
const task6seven = new PersonWithStudentCount("g", 20);
console.log(`Task 6: Student count: ${PersonWithStudentCount.studentCount}`);

// Task 7 && Task 8
class PersonWithFullName {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}
	get firstName() {
		return `First Name = ${this._firstName}`;
	}
	get lastName() {
		return `Last Name = ${this._lastName}`;
	}
	set firstName(newFirstName) {
		this._firstName = newFirstName;
	}
	set lastName(newLastName) {
		this._lastName = newLastName;
	}
}

const myPersonWithFullName = new PersonWithFullName("Chitraks", "Taru");
console.log(`Task 7: ${myPersonWithFullName.firstName}`);
console.log(`Task 7: ${myPersonWithFullName.lastName}`);
myPersonWithFullName.firstName = "Chitraksh";
myPersonWithFullName.lastName = "Tarun";
console.log(`Task 8: ${myPersonWithFullName.firstName}`);
console.log(`Task 8: ${myPersonWithFullName.lastName}`);

// Task 9
class Account {
	#balance;
	constructor(balance) {
		this.#balance = balance;
	}
	depositMoney(money) {
		this.#balance += money;
		console.log(`Task 10: ${money} deposited. Updated balance: ${this.#balance}`);
	}
	withdrawMoney(money) {
		this.#balance < money
			? console.log(`Task 10: You have insufficient balance to withdraw ${money} from ${this.#balance}`)
			: ((this.#balance -= money), console.log(`Task 10: ${money} deposited. Updated balance: ${this.#balance}`));
	}
	displayMoney() {
		console.log(`Task 10: Current Balance: ${this.#balance}`);
	}
}

// Task 10
const myAccount = new Account(100);
myAccount.displayMoney();
myAccount.depositMoney(100);
myAccount.withdrawMoney(250);
myAccount.withdrawMoney(150);
