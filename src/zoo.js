/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animals = data.animals;
const employees = data.employees;
const prices = data.prices;
const calendar = data.hours;


function animalsByIds(ids) {
  // your code here
}


function animalsOlderThan(animal, age) {
  // your code here

}


function employeeByName(employee) {
  // your code here

}


function createEmployee(personal, associated) {
  // your code here

}


function isManager(id) {
  // your code here

}


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // your code here

}


function animalCount(species = 0) {
  // your code here

}


function entryCalculator(entrants) {
  // your code here

}

function animalMap(options) {
  // your code here

}


function schedule(dayName) {
  // your code here

}


function oldestFromFirstSpecies(id) {
  // your code here

}


function increasePrices(percentage) {
  // your code here

}


function employeeCoverageEmpty() {
  // your code here

}

function employeeCoverage(idOrName) {
  // your code here

}


module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
