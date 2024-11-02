// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
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

const updateAge = (array, personName, updateAge) => {
  return array.map((person) => {
    if (person.name === personName) {
      return { ...person, age: updateAge };
    }
    return person;
  });
};
console.log(updateAge(people, "Alice Johnson", 39));
