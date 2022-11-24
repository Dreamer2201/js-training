
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


// let myName = prompt('What is your name?', '');
// alert(`Your name is ${myName}`)

// increment / decrement
let counter = 1;
console.log(counter++);
console.log(++counter);
console.log(counter);

let y = +"\t\n";
console.log(y);

console.log('C' < 'c');

// let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');

// if (year == 2015) alert( 'Ви маєте рацію!' );


// let ageAgent = prompt('Вік?', 18);

// let message = (ageAgent < 3) ? 'Привіт, крихітко!' :
//   (ageAgent < 18) ? 'Вітаю!' :
//   (ageAgent < 100) ? 'Моє шанування!' :
//   'Який незвичайний вік!';

// alert( message );


// let message = prompt("Яка “офіційна” назва JavaScript?", '');
// if (message === "ECMAScript") {
//   alert("Правильно!");
// } else {
//   alert('Ви не знаєте? ECMAScript!');
// };


// let value = prompt('Enter your number', 0);
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }


// let firstName = "";
// let lastName = "";
// let nickName = "СуперКодер";

// alert( firstName || lastName || nickName || "Анонім"); // СуперКодер

// let firstName = "";
// let lastName = "";
// let nickName = "";

// alert( firstName || lastName || nickName || "Анонім"); // Анонім

// a ?? b
// result = (a !== null && a !== undefined) ? a : b;

// let height = 0;

// alert(height || 100); // 100
// alert(height ?? 100); // 0


// while

// let i = 0;
// while (i < 3) { // показується 0, далі 1, потім 2
//   alert( i );
//   i++;
// }

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// for (початок; умова; крок) {
//   // ... тіло циклу ...
// }


// let i = 0;
// for (i = 0; i < 3; i++) { // використовуємо існуючу змінну
//   alert(i); // 0, 1, 2
// }
// alert(i); // 3, змінна доступна, тому що вона оголошена поза циклом


// let sum = 0;
// while (true) {
//   let value = +prompt("Введіть число", '');
//   if (!value) break; // (*)
//   sum += value;
// }
// alert('Сума: ' + sum);


// for (let i = 0; i < 10; i++) {
//   // якщо умова справджується, тоді пропускаємо решту тіла циклу і починаємо з наступної ітерації
//   if (i % 2 == 0) continue;
//   alert(i); // 1, потім 3, 5, 7, 9
// }


// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// let num;
// do {
//   num = prompt('enter num > 100', 0)
// } while (num < 100 && num);


// switch case

// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Замало' );
//     break;
//   case 4:
//     alert( 'Точнісінько!' );
//     break;
//   case 5:
//     alert( 'Забагато' );
//     break;
//   default:
//     alert( 'Я не знаю таких значень' );
// }



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

