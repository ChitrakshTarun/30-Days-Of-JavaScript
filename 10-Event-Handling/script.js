// Task 1
const task1 = document.querySelector("#task-1-id");
const task1Button = document.querySelector("#task-1-button");
task1Button.addEventListener("click", () => {
	task1.innerHTML = "Task 1: Change the text of the paragraph.";
});

// Task 2
const task2 = document.querySelector("#task-2-id");
const task2Button = document.querySelector("#task-2-button");

task2Button.addEventListener("dblclick", () => {
  task2.style.visibility == "hidden" ? task2.style.visibility = "visible" : task2.style.visibility = "hidden";
});

// Task 3
const task3 = document.querySelector("#task-3-id");
task3.addEventListener("mouseover", () => task3.style.border = "1px solid lightgreen");

// Task 4
const task4 = document.querySelector("#task-4-id");
task4.addEventListener("mouseover", () => task4.style.backgroundColor = "lightgreen");
task4.addEventListener("mouseout", () => task4.style.backgroundColor = "transparent");

// Task 5
const task5 = document.querySelector("#task-5-id");
task5.addEventListener("keydown", (e) => console.log(e.key));

// Task 6
const task6 = document.querySelector("#task-6-id");
task6.addEventListener("keyup", (e) => console.log(e.target.value));

// Task 7
const task7 = document.querySelector("#task-7-id");
const task7Button = document.querySelector("#task-7-button");
task7.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(task7.elements.username.value);
})

// Task 8
const task8 = document.querySelector("#task-8-id");
const task8Select = document.querySelector("#task-8-select");
task8Select.addEventListener("change", () => task8.innerHTML = `Task 8: You selected ${task8Select.value}`);

// Task 9
const task9 = document.querySelector("#task-9-id");
const task9Ul = document.querySelector("#task-9-ul");
task9Ul.addEventListener("click", (e) => {
  if(e.target.tagName == "LI") {
    task9.innerHTML = `Task 9: You selected ${e.target.textContent}`
  }
})

// Task 10
const task10 = document.querySelector("#task-10-id");
const task10Ul = document.querySelector("#task-10-ul");
const task10Button = document.querySelector("#task-10-button");
let count = 0;
task10Button.addEventListener("click", (e) => {
  count++;
  let newLi = document.createElement("li");
  newLi.textContent = `${count}`;
  task10Ul.appendChild(newLi);
  task10.innerHTML = `Task 10: Press button to add new child. Current count: ${count}`
})