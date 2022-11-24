// 1.
// function User(name) {
//   // this = {};  (неявно)
//   // додає властивості до this
//   this.name = name;
//   this.isAdmin = false;
//   // return this;  (неявно)
// }


// 2. Інкапсуляція коду
// створити функцію і негайно викликати її за допомогою new
// let user = new function() {
//   this.name = "Джон";
//   this.isAdmin = false;
//   // ...інший код для створення користувача
//   // можливо складна логіка та інструкції
//   // локальні змінні тощо
// };
// console.log(user);


// 3. return в конструкторі:
// 3.1
// function BigUser() {
//   this.name = "Джон";
//   return { name: "Ґодзілла" };  // <-- повертає цей об’єкт
// }
// console.log( new BigUser().name );  // Ґодзілла, отримали цей об’єкт

// // 3.2
// function SmallUser() {
//   this.name = "Джон";
//   return; // <-- повертає this
// }
// console.log(new SmallUser().name);  // Джон


// 4. Створення методів у конструкторі
// function UserName(name, surname = '') {
//     this.name = name;
//     this.surname = surname;
//     this.fullName = name + ' ' + surname;
//     this.sayHi = function () {
//         console.log('Your name is:', this.fullName);
//     };
// }
// const oksana = new UserName('Oksana', 23);
// oksana.sayHi();


// 5. Чи можливо створити функції A та B, щоб new A() == new B()?
// function A() { ... }
// function B() { ... }
// let a = new A;
// let b = new B;
// alert( a == b ); // true

// відповідь:
// const object = {};
// function A() { return object; }
// function B() { return object; }
// let a = new A;
// let b = new B;
// console.log( a === b ); // true


// 6. Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

// function Calculator() {
//     this.read = function () {
//             this.a = +prompt('a', 0);
//             this.b = +prompt('b', 0);
//     },
//     this.sum = function () {
//         console.log(this.a);
//         return this.a + this.b;
//         },
//     this.mul = function () {
//         return this.a * this.b;
//         }
// };
// let calculator = new Calculator();
// console.log(calculator);
// calculator.read();
// console.log( "Sum=" + calculator.sum() );
// console.log("Mul=" + calculator.mul());


// 7. Створіть функцію-конструктор Accumulator(startingValue).
// Об’єкт, який він створює повинен:
// Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
// Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
// Іншими словами, властивість value – це сума всіх введенних користувачем значень разом із початковим значенням startingValue.

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         let newValue = +prompt('enter new vaue', 0);
//         return this.value += newValue;
//     }
// };
// let accumulator = new Accumulator(1); // початкове значення 1
// console.log(accumulator);
// accumulator.read(); // додає введене користувачем значення
// accumulator.read(); // додає введене користувачем значення

// console.log(accumulator.value);