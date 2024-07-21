// Task 1
const task1 = document.querySelector("#task-1-id");
task1.innerHTML = "Task 1: Change text content via #id";

// Task 2
const task2 = document.querySelector(".task-2-class");
task2.style.backgroundColor = "lightgreen";

// Task 3
const body = document.querySelector("body");
const newDiv = document.createElement("div");
const task3 = document.createTextNode("Task 3: Append div with text to body");
newDiv.appendChild(task3);
body.appendChild(newDiv);

// Task 4
const newUl = document.querySelector("#task-4-id");
const newLi = document.createElement("li");
newLi.innerHTML = "Item 2";
newUl.appendChild(newLi);

// Task 5
const task5 = document.querySelector("#task-5-id");
task5.remove();

// Task 6
const task6 = document.querySelector("#task-6-id");
task6.removeChild(task6.lastElementChild);

// Task 7
const task7 = document.querySelector("#task-7-id");
task7.setAttribute("src", "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg");

// Task 8
const task8 = document.querySelector("#task-8-id");
task8.setAttribute("class", "task-8-class");

// Task 9
const button = document.querySelector("#task-9-button");
const task9 = document.querySelector("#task-9-id");
button.addEventListener("click", () => task9.textContent = "Task 9: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis modi a asperiores, excepturi maiores eos. Illo doloribus consectetur odit accusamus, veritatis, quo debitis dolores dolore consequuntur eos expedita maxime dolorum.");

// Task 10
const task10 = document.querySelector("#task-10-id");
task10.addEventListener("mouseover", () => task10.style.border = "1px solid lightgreen");