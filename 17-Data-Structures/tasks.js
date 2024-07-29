// Task 1
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
const task1 = new Node(1);
console.log("Task 1:", task1);

// Task 2
class LinkedList {
	constructor() {
		this.head = null;
	}
	addNode(value) {
		const node = new Node(value);
		if (this.head === null) {
			this.head = node;
		} else {
			let curr = this.head;
			while (curr.next !== null) curr = curr.next;
			curr.next = node;
		}
	}
	removeNode() {
		if (this.head === null) return null;
		if (this.head.next === null) {
			const value = this.head.value;
			this.head = null;
			return value;
		}
		let curr = this.head;
		while (curr.next.next !== null) curr = curr.next;
		const value = curr.next.value;
		curr.next = null;
		return value;
	}
}
const task2 = new LinkedList();
task2.addNode("Node 1");
task2.addNode("Node 2");
task2.addNode("Node 3");
console.log("Task 2:", task2);

// Task 3
class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.push(item);
	}
	pop() {
		if (!this.items.length) return "Stack Underflow";
		return this.items.pop();
	}
	peek() {
		if (!this.items.length) return "Stack Underflow";
		return this.items[this.items.length - 1];
	}
}
const task3 = new Stack();
task3.push(1);
task3.push(2);
task3.push(3);
console.log(`Task 3: Top item in stack: ${task3.peek()}`);

// Task 4
const task4 = new Stack();
const str = "Chitraksh";
let rev = "";
for (let i = 0; i < str.length; i++) {
	task4.push(str.charAt(i));
}
for (let i = 0; i < str.length; i++) {
	rev += task4.peek();
	task4.pop();
}
console.log(`Task 4: ${str} reversed = ${rev}`);

// Task 5
class Queue {
	constructor() {
		this.items = [];
	}
	enqueue(item) {
		this.items.push(item);
	}
	dequeue() {
		if (!this.items.length) return "Stack Underflow";
		return this.items.shift();
	}
	front() {
		if (!this.items.length) return "Stack Underflow";
		return this.items[0];
	}
}
const task5 = new Queue();
task5.enqueue(0);
task5.enqueue(1);
task5.enqueue(2);
task5.enqueue(3);
task5.enqueue(4);
task5.dequeue();
console.log(`Task 5: Front of queue ${task5.items} = ${task5.front()}`);

// Task 6
const task6 = new Queue();
task6.enqueue("Document 1");
task6.enqueue("Document 2");
task6.enqueue("Document 3");
task6.enqueue("Document 4");
task6.enqueue("Document 5");
while (task6.items.length) {
	console.log(`Task 6: Printing ${task6.items[0]}`);
	task6.dequeue();
}

// Task 7
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
const task7 = new TreeNode(10);
task7.left = new TreeNode(8);
task7.right = new TreeNode(12);
task7.left.left = new TreeNode(7);
task7.left.right = new TreeNode(9);
task7.right.left = new TreeNode(7);
task7.right.right = new TreeNode(9);
console.log("Task 7: Tree =", task7);

// Task 8
class BinaryTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const node = new TreeNode(value);
		this.root == null ? (this.root = node) : this.insertNode(this.root, node);
	}
	insertNode(root, node) {
		if (root.value > node.value) {
			root.left === null ? (root.left = node) : this.insertNode(root.left, node);
		} else {
			root.right === null ? (root.right = node) : this.insertNode(root.right, node);
		}
	}
	inOrderTraversal() {
		const res = [];
		this.traversal(this.root, res);
		return res;
	}
	traversal(node, res) {
		if (node !== null) {
			this.traversal(node.left, res);
			res.push(node.value);
			this.traversal(node.right, res);
		}
	}
}
const task8 = new BinaryTree();
task8.insert(10);
task8.insert(8);
task8.insert(12);
task8.insert(7);
task8.insert(9);
task8.insert(7);
task8.insert(9);
console.log("Task 8: In-Order Traversal = ", task8.inOrderTraversal());
