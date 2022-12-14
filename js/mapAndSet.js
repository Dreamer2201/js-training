
let map = new Map();
map.set('банан', 1);
map.set('апельсин', 2);
map.set('яблуко', 4);
console.log(map);
console.log(map.entries());
let obj = Object.fromEntries(map.entries()); // робимо простий об’єкт (*)

// Готово!
// obj = { банан: 1, апельсин: 2, яблуко: 4 }
console.log(obj);
console.log(obj.апельсин); // 2


// 1
function unique(arr) {
  return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Hare, Krishna, :-O


// 2
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
console.log(Object.entries(prices));
let c = Object.entries(prices).map(item => [item[0], item[0]]);
console.log(c);
let a = Object.entries(prices).map(item => [item[0], item[1] * 2]);
console.log(a);
let b = Object.fromEntries(a);
console.log(b);
let doublePrices = Object.fromEntries(
  // перетворити ціни на масив, потім застосувати map, щоб перетворити на пари ключ/значення
  // а потім fromEntries повертає об’єкт
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); // 8


// 3
let userOksana = {
  name: "Oksana",
  age: 36,
};
console.log(Object.keys(userOksana));
console.log(Object.values(userOksana));
console.log(Object.entries(userOksana));


// 4
let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};
function sumSalaries(obj) {
  let values = Object.values(obj);
  console.log(values);
  return values.reduce((sum, oneSalary) => sum + oneSalary, 0);
}
console.log(sumSalaries(salaries)); // 650

// 5
let userOks = {
  name: "Oksana",
  age: 36,
  surname: "Poliakova",
};
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(userOks)); // 3

// 
let user = {
  name: "Oksana",
  years: 36,
  isAdmin: true,
};
let { name, years: age, isAdmin = false } = user;

console.log( name ); // Oksana
console.log( age ); // 36
console.log( isAdmin ); // false

// maxSalary
let salariesCompany = {
  "Oksana": 500,
  "Dima": 300,
  "Denys": 250
};
let maxSalary = 0;
let nameMaxSalary = null;
  function topSalary(salaries) {
  for (const [name, salary] of Object.entries(salariesCompany)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameMaxSalary = name;
    }
    } return nameMaxSalary;
};
console.log(topSalary(salariesCompany));


