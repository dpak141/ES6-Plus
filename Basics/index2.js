//arrow function
const dinner = (food) => `I am haing ${food} for dinner`;
console.log(dinner());

//default parameter
const leadSinger = (artist = "Someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
};

leadSinger();

const lunch = (food = "something") => `I am going to have ${food} for dinner`;
console.log(lunch());
console.log(lunch("milk"));

// includes
let numArray = [1, 2, 3, 4, 5];
console.log(numArray.includes(5));

//practice
const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("sugar")) {
  console.log("We are going to make cholate cake");
} else {
  console.log("Ingredients Missing");
}

// import and export

import { data } from "./index.js";

let updatedData = data;
console.log(updatedData);

import { adds } from "./index.js";
let result = adds(3, 6);
console.log(result);

// padStart() padEnd()

let example1 = "OK";
console.log(example1.padEnd(4, "ie"));

// fillls the extra space like the the letter is ok is teo but
// is specified 4 so ie is added
