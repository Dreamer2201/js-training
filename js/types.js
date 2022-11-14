
let admin, name;
name = 'Denys';
admin = name;
console.log(admin);

let ourPanetName, currentUserName;

// Numbers
// Infinity

console.log(1 / 0);

// NaN

console.log("not a number" / 2);

console.log(NaN + 1);

console.log(3 * NaN);

console.log("not a number" / 2 - 1);

console.log(NaN ** 0);

// String

let str = "Привіт";
let str2 = 'Одинарні лапки також дозволяються';
let phrase = `так можна вставляти ${str}`;

let nameUser = "Іван";

// вбудована змінна
console.log(`Привіт, ${nameUser}е!`); // Привіт, Іване!

// вбудований вираз
console.log(`результат: ${1 + 2}`); // результат: 3

// Null
// значення змінної age невідоме
let age = null;

// undefined

let ageUser;

console.log(ageUser); // покаже "undefined"

// type object and symbol

// perator typeof

console.log(typeof undefined) // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

console.log(typeof null) // "object"  (2)

console.log(typeof alert) // "function"  (3)


// alert, prompt, confirm

// let ageCient = prompt('Скільки вам років?', 'enter your age, please');

// alert(`Вам ${ageCient} років!`); // Вам 100 років!

// let isBoss = confirm("Ви бос?");

// alert(isBoss); // true, якщо натиснута OK

let myName = prompt('What is your name?', '');
alert(`Your name is ${myName}`)


function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

