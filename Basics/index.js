// template string
let firstName = "Deepak";
let secondName = "Mahato";

let fullname = `${firstName} ${secondName}`;
console.log(fullname);

let example = document.getElementById("example");
example.textContent = fullname;

// objects
const player = {
  name: "Deepak",
  club: "Kathi Club",
  address: {
    city: "Kathmandu",
    county: "Nepal",
  },
};

console.log(player.name);

const {
  names,
  club,
  address: { city },
} = player;
console.log(`${names} plays for ${club} in ${city}`);

// challenge

const student = {
  names2: "Rose",
  age: "22",
  projects: {
    diceGame: "Two player game using JS",
  },
};

const {
  names2,
  age,
  projects: { diceGame },
} = student;

console.log(`${names2} who is ${age} has developed ${diceGame}`);

// destructuring

let [firstName2, middelName, lastName] = ["Deepak", "Mahato", "Tharu"];
middelName = "chaudhary";
console.log(middelName);

// object literals

function addressMaker(city, state) {
  const newAddress = { city, state };
  console.log(newAddress);
}

addressMaker("kathmandu", "nepal");

// for loop
let incomes = [6000, 50000, 4000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

// console.log(total);

let fullNames3 = "Deepak is a googd boy";
for (const char of fullNames3) {
  // console.log(char);
}

//  for challenge

const students = [
  { name: "Deepak", city: "Kathmandu" },
  { name: "suyog", city: "Parsa" },
  { name: "Sital", city: "Bara" },
];
for (const student of students) {
  // console.log(student.name + "lives in " + student.city);
}

// spread operators

let contacts = ["Deepak", "Jack", "Finzo"];
let personalFriedns = [...contacts];

contacts.push("Ken");
console.log(personalFriedns);

let person = {
  name: "Prakash",
  age: 24,
  city: "Dinafi",
};

let employee = {
  ...person,
  salary: 2000,
  position: "Designer",
};
console.log(employee);

// spread opertator challege

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "Banana", "Apple"];
console.log(shoppingList);
console.log(shoppingBasket);

// rest operator

function add(...nums) {
  console.log(nums);
}

add(2, 2, 3, 4, 5);

export const data = [1, 2, 3];

export function adds(a, b) {
  return a + b;
}
