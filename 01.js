//1.Task: Array Filtering and Mapping
//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice Johnson", age: 28, gender: "Female" },
  { name: "Bob Smith", age: 35, gender: "Male" },
  { name: "Charlie Kim", age: 22, gender: "Non-binary" },
  { name: "Diana Martinez", age: 42, gender: "Female" },
  { name: "Edward Lee", age: 29, gender: "Male" },
  { name: "Fiona Chen", age: 33, gender: "Female" },
  { name: "George Patel", age: 26, gender: "Male" },
  { name: "Hannah Brown", age: 31, gender: "Female" },
  { name: "Ian Black", age: 24, gender: "Male" },
  { name: "Julia Davis", age: 39, gender: "Female" },
];
const other = people
  .filter((person) => person.gender != "Female")
  .map((person) => person.name);
console.log(other);
