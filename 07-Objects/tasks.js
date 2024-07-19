// Task 1
const bookObject = {
  title: "Diary of a Wimpy Kid",
  author: "Jeff Kinney",
  year: "2006"
}
console.log(bookObject);

// Task 2
console.log(`The book ${bookObject.title} is written by ${bookObject.author}.`);

// Task 3
bookObject.printBook = () => {
  console.log(`Book: ${bookObject.title}. Author: ${bookObject.author}.`)
}
bookObject.printBook();

// Task 4
bookObject.updateYear = (year) => {
  bookObject.year = year;
}
bookObject.updateYear("2007");
console.log(bookObject);

// Task 5 
const library = {
  name: "School Library",
  books: [
    {name: "English", year: "2010"},
    {name: "Maths", year: "2011"},
    {name: "Science", year: "2009"},
  ]
}
console.log(library);

// Task 6
console.log(`Library name: ${library.name}`);
library.books.forEach(i => console.log("Book:", i))

// Task 7
bookObject.returnWithThis = function () {
  console.log(`Book: ${this.author}. Author: ${this.author}.`)
}
bookObject.returnWithThis();

// Task 8
for (let key in bookObject) console.log(`${key} --> ${bookObject[key]}`);

// Task 9
console.log(Object.keys(bookObject));
console.log(Object.values(bookObject));