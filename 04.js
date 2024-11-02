// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2019 },
  { make: "Chevrolet", model: "Impala", year: 2017 },
  { make: "BMW", model: "X5", year: 2021 },
  { make: "Audi", model: "A4", year: 2016 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Hyundai", model: "Elantra", year: 2020 },
  { make: "Nissan", model: "Altima", year: 2015 },
];

const sortRes = (car) => {
  car.sort((a, b) => a.year - b.year);
};
sortRes(cars);
console.log(cars);
